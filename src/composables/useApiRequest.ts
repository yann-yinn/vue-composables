import { ref } from "vue";

type RequestState = "UNSENT" | "PENDING" | "SUCCESS" | "ERROR";

const tokenName = "token";

/**
 * Fetch JSON from an API using Fetch(). This function also
 * add automatically a token to the headers, if there is one.
 * Example usage:
 *
 * <code>
 * interface User {id:string; name:string;}
 * const { state, error, data, execute } = useApiRequest<Users[]>("api/users");
 * execute();
 * </code>
 */

export default function useApiRequest<Type>(
  url: string,
  init: RequestInit = { method: "GET" }
) {
  const state = ref<RequestState>("UNSENT");
  const data = ref<Type | null>(null);
  const error = ref<string | null>(null);

  // add jwt token to headers, if any.
  addAuthorizationHeaders(init);

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

/**
 * Search for a JWT token in localStorage, and add it
 * to the HTTP Headers if found.
 */
function addAuthorizationHeaders(init: RequestInit) {
  const token = localStorage.getItem(tokenName);
  if (token) {
    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${token}`,
    };
  }
}
