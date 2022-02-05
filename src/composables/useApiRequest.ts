/**
 * Usage in a component:
 *
 * import useApiRequest from "@/composables/useApiRequest"
 *
 * const usersRequest = useApiRequest("https://jsonplaceholder.typicode.com/users");
 *
 * function handleFormSubmit() {
 *   usersRequest.execute()
 * }
 */
import { ref } from "vue";

type RequestState = "UNSENT" | "PENDING" | "SUCCESS" | "ERROR";

export default function useApiRequest<Type>(
  url: string,
  init: RequestInit = { method: "GET" }
) {
  const state = ref<RequestState>("UNSENT");
  const data = ref<Type | null>(null);
  const error = ref<string | null>(null);

  async function execute(): Promise<Type> {
    state.value = "PENDING";
    error.value = null;
    const response = await fetch(url, init);
    if (!response.ok) {
      state.value = "ERROR";
      error.value = `HTTP error! status: ${response.status}`;
      throw new Error(error.value);
    }
    const result = await response.json();
    data.value = result;
    state.value = "SUCCESS";
    return result;
  }

  return { state, error, data, execute };
}
