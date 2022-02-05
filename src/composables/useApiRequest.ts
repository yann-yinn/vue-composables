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
import { reactive } from "vue";

type RequestState = "UNSENT" | "PENDING" | "SUCCESS" | "ERROR";

export default function useApiRequest<Type>(
  url: string,
  init: RequestInit = { method: "GET" }
) {
  const state = reactive<{
    state: RequestState;
    data: Type | null;
    error: string | null;
  }>({
    state: "UNSENT",
    data: null,
    error: null,
  });

  async function execute(): Promise<Type> {
    state.state = "PENDING";
    state.error = null;
    const response = await fetch(url, init);
    if (!response.ok) {
      state.state = "ERROR";
      state.error = `HTTP error! status: ${response.status}`;
      throw new Error(state.error);
    }
    const data = await response.json();
    state.data = data;
    state.state = "SUCCESS";
    return data;
  }

  return { state, execute };
}
