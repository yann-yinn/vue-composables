<script setup lang="ts">
import useStoreCounter from "@/composables/useStoreCounter";
const { state, increment, decrement } = useStoreCounter();
</script>

<template>
  <div>
    <h1>{{ state.count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
