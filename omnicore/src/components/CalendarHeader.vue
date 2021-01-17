<template>
  <div class="header-wrap">
    <div class="header grid">
      <div class="header__controls">
        <button type="button" class="header__controls-btn" @click="showEventsModalHandler">Добавить</button>
        <button type="button" class="header__controls-btn">Обновить</button>

        <form class="header__modal" @submit.prevent="submitHandler" v-show="showEventsModal">
          <div class="header__modal-content">
            <button type="button" class="header__modal-hide-btn" @click="showEventsModal = false">X</button>
            <input
              v-model="eventText"
              ref="event_input"
              class="header__modal-input"
              type="text"
              placeholder="5 марта, 14:00, День рождения"
              required
            >
            <button type="submit" class="header__controls-btn header__modal-submit-btn">Создать</button>
          </div>
        </form>
      </div>

      <label class="header__search">
        <i class="header__search-icon"></i>
        <input
          v-model="searchVal"
          @focus="focus"
          @blur="blur"
          class="header__search-input"
          type="text"
          placeholder="Событие, дата, учасник"
        >
      </label>

      <div class="header__modal header__search-modal" v-show="showSearchResult && showSearchModal">
        <div class="header__modal-content">
          <ul class="header__search-items" v-if="searchResult.length">
            <li
              class="header__search-item"
              v-for="event of searchResult"
              :key="event.text"
              @click="setSearchEventsDateHandler(event.date)">
              <p class="header__search-item-text">{{ event.text }}</p>
              <span class="header__search-item-date">{{ event.date | date }}</span>
            </li>
          </ul>
          <p v-else class="header__search-fallback">По запросу ничего не найдено</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarHeader',
  props: {
    daysEvents: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    eventText: '',
    searchVal: '',
    showEventsModal: false,
    showSearchModal: false,
  }),
  computed: {
    searchResult() {
      if (!this.searchVal.trim()) return [];
      return this.daysEvents.filter(evt => evt.text.toLowerCase().includes(this.searchVal.toLowerCase()));
    },
    showSearchResult() {
      return this.searchVal.trim();
    },
  },
  methods: {
    submitHandler() {
      this.$emit('setEventToDay', this.eventText);
      this.showEventsModal = false;
      this.eventText = '';
    },
    showEventsModalHandler() {
      this.showEventsModal = true;
      this.searchVal = '';
      this.$nextTick(() => {
        this.$refs.event_input.focus();
      });
    },
    setSearchEventsDateHandler(date) {
      this.$emit('setSearchEventsDate', date);
      this.searchVal = '';
      this.showEventsModal = false;
      this.showSearchModal = false;
    },
    focus() {
      this.eventText = '';
      this.showSearchModal = true;
      this.showEventsModal = false;
    },
    blur() {
      setTimeout(() => this.showSearchModal = false, 150);
    },
  },
  filters: {
    date(value) {
      const options = {
        day: '2-digit',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
      }
      return new Intl.DateTimeFormat('ru', options).format(new Date(value))
    }
  },
}
</script>

<style scoped lang="scss">
.header-wrap {
  margin-bottom: 14px;
  padding: 56px 12px 19px;
  background-color: #f4f4f4;
  box-shadow: 0 0 2px 2px #d6d6d6;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__contorls {
    position: relative;
  }

  &__controls-btn {
    padding: 4px 10px;
    border-radius: 2px;
    background-color: #006fc9;
    transition: background-color .3s ease-in-out;
    color: #fff;
  }

  &__controls-btn + &__controls-btn {
    margin-left: 10px;
  }

  &__controls-btn:hover {
    background-color: darken(#006fc9, 10%);
  }

  &__search {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__search-icon {
    display: inline-block;
    margin-right: 6px;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' fill='%23bebebe'/%3E%3C/svg%3E");
    background-position: 50%;
    background-size: contain;
  }

  &__search-input {
    width: 200px;
  }

  &__search-input::placeholder {
    color: #d7d7d7;
  }

  &__modal {
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    width: 304px;
    box-shadow: 0 0 4px 2px #d6d6d6;
    z-index: 2;
  }

  &__modal::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 25px;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    box-shadow: 0 0 4px 2px #d6d6d6;
    background-color: #fff;
  }

  &__modal-content {
    position: relative;
    padding: 24px;
    background-color: #fff;
  }

  &__modal-hide-btn {
    position: absolute;
    top: 2px;
    right: 4px;
    padding: 2px 6px;;
    font-size: 10px;
    font-weight: bold;
    background-color: transparent;
  }

  &__modal-input {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    color: #2d2d2d;
  }

  &__modal-submit-btn {
    background-color: green;
  }

  &__search-modal {
    left: auto;
    right: 0;
    width: 200px;
    box-shadow: 0 0 4px 2px #b1b1b1;
  }

  &__search-modal &__modal-content {
    padding: 6px;
  }

  &__search-items {
    max-height: 300px;
    overflow-y: scroll;
  }

  &__search-item {
    padding: 4px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }

  &__search-item:hover {
    background-color: #199eff;
  }

  &__search-item:hover * {
    color: #fff;
  }

  &__search-item-text {
    font-weight: bold;
    color: #2d2d2d;
  }

  &__search-item-date {
    font-size: 12px;
  }

  &__search-fallback {
    padding: 4px;
    font-weight: bold;
    color: #2d2d2d;
  }
}

@media only screen and (max-width: 470px) {
  .header-wrap {
    padding: 24px 12px 16px;
  }
  .header {
    flex-wrap: wrap;
  }
  .header__controls {
    order: 2;
    width: 100%;
    margin: 12px 0 0 0;
    padding-top: 12px;
    border-top: 1px solid #d0d0d0;
  }
  .header__search {
    width: 100%;
  }
  .header__search-input,
  .header__search-modal {
    display: block;
    width: 100%;
  }
  .header__search-modal {
    top: 50%;
  }
  .header__search-modal::before {
    left: 40px;
  }
}
</style>
