import { ref, watch, type Ref } from "vue";

export default function useScrollEndDetection(
  containerRef: Ref<HTMLElement | null>
) {
  const scrolledToBottom = ref(false);

  watch(containerRef, () => {
    if (containerRef.value) {
      containerRef.value.addEventListener("scroll", trackScrolling);
    }
  });

  function trackScrolling(event) {
    const element: HTMLElement = event.target;
    if (element.clientHeight + element.scrollTop == element.scrollHeight) {
      scrolledToBottom.value = true;
    }
  }

  return { scrolledToBottom };
}
