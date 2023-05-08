import {defineStore} from "pinia";
import {ref, Ref} from "vue";
import {IGenre} from "@/types/genres/genre";
import {getGenres} from "@/services/genres";

export const useGenresStore = defineStore('genres', () => {
  const genres: Ref<IGenre[] | null> = ref(null)

  const getAllGenres = async (): Promise<void> => {
    const res = await getGenres()
    genres.value = res.results
  }

  return {getAllGenres, genres}
})
