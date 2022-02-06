import { ref } from "vue";
import useWindowEventListener from "@/composables/useWindowEventListener";

export default function useMouse() {
  const x = ref(0);
  const y = ref(0);

  useWindowEventListener("mousemove", (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return { x, y };
}
