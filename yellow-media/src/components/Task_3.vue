<template>
  <div class="task">
    <h2>Task 3</h2>
    <pre>{{ urlParams }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Task_3',
  data: () => ({
    urlParams: '',
  }),
  mounted() {
    const searchParams = new URLSearchParams(window.location.search);
    const obj = {};
    for (const pair of searchParams.entries()) {
      obj[pair[0]] = pair[1]
    }
    this.urlParams = JSON.stringify(obj, null, 2);
  }
}
</script>
