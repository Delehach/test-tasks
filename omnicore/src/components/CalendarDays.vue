<template>
  <div class="calendar">
    <div class="calendar__month grid">
      <button type="button" class="calendar__month-btn" @click="eventHandler('prevMonth')">&lt;</button>
      <p class="calendar__current-month">{{ data.getMonthName }} {{ data.year }}</p>
      <button type="button" class="calendar__month-btn" @click="eventHandler('nextMonth')">&gt;</button>
      <button type="button" class="calendar__today-btn" @click="eventHandler('todayMonth')">Сегодня</button>
    </div>

    <div class="calendar__days grid">
      <div
        :class="['calendar__day', {
          'is-current': day.current,
          'is-selected':day.selected,
          'is-disabled':day.disabledDay,
          'has-event': day.events.length
        }]"
        v-for="(day, idx) of data.days"
        :key="day.id"
        @click="eventHandler('selectDay', day.fullDate)"
      >
        <span v-if="idx <= 6" class="calendar__weekday">
          <b class="calendar__long-weekday">{{ day.weekday.long }},</b>
          <strong class="calendar__short-weekday">{{ day.weekday.short }},</strong>
        </span>
        <span class="calendar__day-number">{{ day.dayNumber }}</span>
        <div class="calendar__day-event" v-for="(event, idx) of day.events" :key="event.text">
          <b class="calendar__day-event-number">{{ idx }}.</b> {{ event.text }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CalendarDays',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    eventHandler(event, ...args) {
      this.$emit(event, ...args);
    }
  }
}
</script>

<style scoped lang="scss">
.calendar {
  &__month {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__current-month {
    margin: 0 6px;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 500;
    color: #2d2d2d;
  }

  &__month-btn {
    width: 16px;
    padding: 2px 0;
    border-radius: 2px;
    box-shadow: inset 0 0 2px 2px #e4e4e4;
    font-size: 10px;
    font-weight: bold;
    background-color: #fff;
    color: #2d2d2d;
  }

  &__today-btn {
    margin-left: 10px;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12px;
    box-shadow: inset 0 0 2px 2px #e4e4e4;
    background-color: #fff;
    color: #8d8d8d;
  }

  &__days {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
  }

  &__day {
    position: relative;
    width: calc(100% / 7);
    padding: 6px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  &__day::before {
    content: '';
    padding-top: calc(100% - 12px); // 6px padding-top/padding-bottom
    float: left;
  }

  &__day.is-current {
    background-color: #f4f4f4;
  }

  &__day.has-event {
    background-color: #c1e4ff;
  }

  &__day.is-selected {
    background-color: rgba(193, 228, 255, .5);
  }

  &__day:not(.is-selected):hover {
    background-color: rgba(193, 228, 255, .2);
  }

  &__day.is-disabled {
    pointer-events: none;
  }

  &__day.is-disabled * {
    opacity: .5;
  }

  &__day.is-current .calendar__weekday,
  &__day.is-current .calendar__weekday *,
  &__day.is-current .calendar__day-number {
    font-weight: bold;
  }

  &__weekday {
    margin-right: 4px;
  }

  &__weekday,
  &__weekday * {
    font-size: 11px;
    font-weight: normal;
    text-transform: capitalize;
  }

  &__short-weekday {
    display: none;
  }

  &__day-number {
    display: inline-block;
    margin-bottom: 6px;
    font-size: 12px;
  }

  &__day-event,
  &__day-event-number {
    font-size: 12px;
    color: #8c8c8c;
  }
}

@media only screen and (max-width: 924px) {
  .calendar {
    padding: 0 12px;
  }
}

@media only screen and (max-width: 768px) {
  .calendar__long-weekday {
    display: none;
  }
  .calendar__short-weekday {
    display: inline;
  }
  .calendar__day-event {
    display: none;
  }
}
</style>
