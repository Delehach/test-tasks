<template>
  <div id="app">
    <SignUpForm/>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm';

export default {
  name: 'App',
  components: {
    SignUpForm
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

body {
  background-color: #eee;
}
</style>
