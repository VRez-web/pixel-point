import {defineStore} from "pinia";
import {useFetch} from "@/composables/app/useFetch";
import {IMatch} from "@/types/match";
import {useRoute} from "vue-router";

export const useMatchDetails = defineStore('match-details', () => {
  const route = useRoute()

  const {data: match, isLoading, isError} = useFetch<IMatch>(`matches/${Number(route.query.id)}`)

  return {match, isLoading, isError,}
})
