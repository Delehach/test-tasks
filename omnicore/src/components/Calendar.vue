<template>
  <div>
    <CalendarHeader
      :daysEvents="daysEvents"
      @setEventToDay="setEventToDay"
      @setSearchEventsDate="setSearchEventsDate"
    />
    <CalendarDays
      :data="{year, getMonthName, days}"
      @prevMonth="prevMonth"
      @nextMonth="nextMonth"
      @todayMonth="todayMonth"
      @selectDay="selectDay"
    />
  </div>
</template>

<script>
import CalendarHeader from '@/components/CalendarHeader'
import CalendarDays from '@/components/CalendarDays'

export default {
  name: 'Calendar',
  components: {
    CalendarHeader,
    CalendarDays,
  },
  data: () => ({
    currentDate: new Date(),
    selectedDay: '',
    daysEvents: [],
  }),
  computed: {
    getMonthName() {
      return new Intl.DateTimeFormat('ru-RU', {month: 'long'}).format(new Date(this.currentDate));
    },
    year() {
      return this.currentDate.getFullYear();
    },
    month() {
      return this.currentDate.getMonth();
    },
    getDays() {
      const currentMonthLength = this.getMonthLength(this.year, this.month + 1, 0);
      const prevMonthLength = this.getMonthLength(this.year, this.month, 0);
      const firstDayIndex = new Date(this.year, this.month, 1).getDay();
      const lastDayIndex = new Date(this.year, this.month + 1, 0).getDay();
      const prevDays = firstDayIndex - 1 < 0 ? 6 : firstDayIndex - 1;
      const nextDays = lastDayIndex === 0 ? 0 : 7 - lastDayIndex;

      const daysInPrevMonth = this.generateDays({
        daysCount: prevDays,
        month: this.month - 1,
        prevMonthLength,
      });

      const daysInCurrentMonth = this.generateDays({
        daysCount: currentMonthLength,
        month: this.month,
      });

      const daysInNextMont = this.generateDays({
        daysCount: nextDays,
        month: this.month + 1,
      });

      return [...daysInPrevMonth, ...daysInCurrentMonth, ...daysInNextMont];
    },
    days() {
      return this.getDays.map(day => {
        if (day.fullDate === this.selectedDay) {
          return {
            ...day,
            selected: true,
          }
        }
        return day;
      });
    }
  },
  methods: {
    formatWeekday(date, formatRule) {
      return new Intl.DateTimeFormat('ru-RU', {weekday: formatRule}).format(date);
    },
    getMonthLength(year, month, day) {
      return new Date(year, month, day).getDate();
    },
    generateDays(data) {
      const {daysCount, month, prevMonthLength} = data;
      const now = new Date();
      return new Array(daysCount).fill({}).map((day, idx) => {
        const dayNumber = prevMonthLength ? prevMonthLength - daysCount + idx + 1 : idx + 1;
        const fullDate = new Date(this.year, month, dayNumber);
        return {
          ...day,
          id: +`${month}${daysCount}${dayNumber}`,
          fullDate,
          dayNumber,
          weekday: {
            long: this.formatWeekday(new Date(this.year, month, dayNumber), 'long'),
            short: this.formatWeekday(new Date(this.year, month, dayNumber), 'short'),
          },
          events: this.daysEvents.filter(event => event.date.toLocaleDateString() === fullDate.toLocaleDateString()),
          current: idx + 1 === now.getDate() && this.month === now.getMonth(),
          selected: false,
        }
      });
    },
    prevMonth() {
      this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
    },
    todayMonth() {
      this.currentDate = new Date();
    },
    setSearchEventsDate(date) {
      this.currentDate = new Date(date);
    },
    selectDay(day) {
      this.selectedDay = day;
    },
    setEventToDay(text) {
      if (this.selectedDay === '') {
        alert('Пожалуйста, выбирите день для котого Вы хотите создать событие');
        return;
      }
      this.daysEvents.push({
        date: this.selectedDay,
        text,
      });
      localStorage.setItem('calendarDaysEvent', JSON.stringify(this.daysEvents));
      this.selectedDay = '';
    },
  },
  created() {
    if (localStorage.getItem('calendarDaysEvent')) {
      this.daysEvents = JSON.parse(localStorage.getItem('calendarDaysEvent')).map(evt => ({
        ...evt,
        date: new Date(evt.date),
      }));
    }
  },
  mounted() {
    alert(`
    Для перехода между месяцами используйте стрелки вправо/влево. Кнопка "сегодня" возвращает на текущий месяц.

    Для быстрого добавление события кликните на нужный день, затем нажмите кнопку добавить.

    Для поиска введите название события. Чтоб отобразить искомое событие, кликните по нему - выведется нужный месяц.
    `)
  }
}
</script>
