import { ref, type Ref, onUnmounted, onMounted } from "vue";

export default function useScrollEndDetection(
  containerRef: Ref<HTMLElement | null>
) {
  const scrolledToBottom = ref(false);

  function trackScrolling(event: Event) {
    if (event.target) {
      const element = event.target as HTMLElement;
      if (element.clientHeight + element.scrollTop == element.scrollHeight) {
        scrolledToBottom.value = true;
      }
    }
  }

  onMounted(() => {
    if (containerRef.value === null) {
      throw new Error(`useScrollEndDetection(): no HTML Element found`);
    } else {
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
