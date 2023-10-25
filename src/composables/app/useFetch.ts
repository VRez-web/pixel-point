import {Ref, ref} from "vue";

const token = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL

interface IFetchResponse<T> {
  isLoading: Ref<boolean>
  isError: Ref<boolean>
  data: Ref<null | T>
}

// TODO: need a refactoring
export function useFetch<T>(url: string): IFetchResponse<T> {
  const isLoading: Ref<boolean> = ref(false)
  const isError: Ref<boolean> = ref(false)
  const data: Ref<null | T> = ref(null)

  isLoading.value = true
  const res = fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then((response:Response) => response.json())
    .then((responseData: T) => data.value = responseData)
    .catch(() => isError.value = true)
    .finally(() => isLoading.value = false)

  return {isLoading, isError, data}
}
