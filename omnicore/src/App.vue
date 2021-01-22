<template>
  <div id="app">
    <Calendar/>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar';

export default {
  name: 'App',
  components: {
    Calendar,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

body {
  background-color: #fff;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  border: none;
}

ul {
  list-style-type: none;
}

input {
  padding: 2px 6px;
  border: 2px solid #dadada;
  border-top-width: 2px;
  border-top-color: #bdbdbd;
  border-radius: 2px;
  background-color: #fff;
}

.grid {
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
}
</style>
