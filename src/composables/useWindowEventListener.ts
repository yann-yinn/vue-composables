import { onMounted, onUnmounted } from "vue";

// add and remove any window eventListener
export default function useWindowEventListener(event: string, callback) {
  onMounted(() => window.addEventListener(event, callback));
  onUnmounted(() => window.removeEventListener(event, callback));
}
