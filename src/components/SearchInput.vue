<template>
  <input
    type="search"
    v-bind="$attrs"
    @input="$emit('searching', $event.target.value)"
  />
</template>

<style scoped>
input {
  height: 3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #4e4e4e;
}
</style>
