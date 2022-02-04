<script setup lang="ts">
import { ref } from "vue";
import useScrollEndDetection from "@/composables/useScrollEndDetection";

const cgu = ref<HTMLElement | null>(null);
const { scrolledToBottom } = useScrollEndDetection(cgu);
</script>

<template>
  <div ref="cgu" id="cgu">
    <h2>CGU</h2>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
    <p>blablabla</p>
  </div>
  <button :disabled="!scrolledToBottom">J'ai bien tout lu !</button>
</template>

<style>
#cgu {
  background: silver;
  max-height: 200px;
  overflow-y: scroll;
}
button {
  margin-top: 10px;
}
</style>
