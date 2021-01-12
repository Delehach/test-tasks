<template>
  <div id="app">
    <Task_1/>
    <Task_2/>
    <Task_3/>
    <Task_4/>
  </div>
</template>

<script>
import Task_1 from "@/components/Task_1";
import Task_2 from "@/components/Task_2";
import Task_3 from "@/components/Task_3";
import Task_4 from "@/components/Task_4";

export default {
  name: 'App',
  components: {
    Task_1,
    Task_2,
    Task_3,
    Task_4,
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  max-width: 728px;
  margin: 24px auto 0;
  text-align: left;
}

h2 {
  margin: 0 0 12px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 4px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  color: #212529;
}

.task {
  margin-bottom: 24px;
  padding: 24px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}
</style>
