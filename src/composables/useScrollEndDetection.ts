import { ref, type Ref, onUnmounted, onMounted } from "vue";

export default function useScrollEndDetection(
  containerRef: Ref<HTMLElement | null>
) {
  const scrolledToBottom = ref(false);

  function trackScrolling(event) {
    const element: HTMLElement = event.target;
    if (element.clientHeight + element.scrollTop == element.scrollHeight) {
      scrolledToBottom.value = true;
    }
  }

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener("scroll", trackScrolling);
    }
  });

  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener("scroll", trackScrolling);
    }
  });

  return { scrolledToBottom };
}
