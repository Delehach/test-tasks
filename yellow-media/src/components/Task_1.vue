<template>
  <div class="task">
    <h2>Task 1</h2>
    <input
      type="text"
      placeholder="Enter some word"
      v-model="defaultString"
    >
    <div>Most frequent character: <strong>{{ getFrequentChar }}</strong></div>
  </div>
</template>

<script>
export default {
  name: 'Task_1',
  data: () => ({
    defaultString: 'Differences',
  }),
  computed: {
    getFrequentChar() {
      let frequentChar = ''
      let frequentCounter = 0;
      const str = this.defaultString.toLowerCase();
      str.split('').forEach(char => {
        if (str.split(char).length > frequentCounter && char !== ' ') {
          frequentCounter = str.split(char).length;
          frequentChar = char;
        }
      });
      return frequentChar;
    }
  },
}
</script>

<style scoped>

</style>
