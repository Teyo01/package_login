<template>
  <div>
    <h1>{{$t('welcome')}}</h1>
    <q-btn @click="increment">Click Me</q-btn>
    <p>You've pressed the button {{counter}} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  },
}
</script>

<style scoped>
  p {
    font-family: serif;
  }
</style>
