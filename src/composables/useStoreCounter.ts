import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
  doubleCount: 0,
});

function increment() {
  state.count++;
}

function decrement() {
  state.count--;
}

export default function useStoreCounter() {
  return {
    increment,
    decrement,
    state: readonly(state),
  };
}
