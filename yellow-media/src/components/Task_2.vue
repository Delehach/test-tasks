<template>
  <form @submit.prevent="submitHandler" class="task">
    <h2>Task 2</h2>
    <p :class="isOdd" v-if="numValue">Value: {{ numValue }}</p>
    <input type="number" v-model="numValue" required>
    <button type="submit" :disabled="!isDisable">Set</button>
    <button type="button" @click="clearData">Clear</button>
  </form>
</template>

<script>
export default {
  name: 'Task_2',
  data: () => ({
    numValue: '',
  }),
  computed: {
    isOdd() {
      if (+this.numValue === 0) return '';
      return this.numValue % 2 ? 'is_odd' : 'is_even';
    },
    isDisable() {
      return !!this.numValue;
    }
  },
  methods: {
    submitHandler() {
      localStorage.setItem('num23', this.numValue);
    },
    clearData() {
      localStorage.removeItem('num23');
      this.numValue = '';
    }
  },
  mounted() {
    if (localStorage.getItem('num23')) {
      this.numValue = localStorage.getItem('num23');
    }
  },
}
</script>

<style scoped>
.is_even {
  color: green;
}

.is_odd {
  color: red;
}

button {
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  background-color: #dc3545;
}

button:hover {
  background-color: #e64958;
}

button[type="submit"] {
  margin-right: 12px;
  background-color: #198754;
}

button[type="submit"]:hover {
  background-color: #20a065;
}

button[disabled] {
  opacity: .4;
}
</style>
