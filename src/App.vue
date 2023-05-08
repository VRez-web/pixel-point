<script setup lang="ts">
import DefaultLayout from "@/layouts/Default.vue";
import {onBeforeMount} from "vue";
import {useGenresStore} from "@/store/genres";

const storeGenres = useGenresStore()

onBeforeMount(() => storeGenres.getAllGenres())
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
