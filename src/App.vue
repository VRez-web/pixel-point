<script setup lang="ts">
import DefaultLayout from "@/layouts/Default.vue";
import {onBeforeMount} from "vue";
import {getGenres} from "@/services/genres";

onBeforeMount(() => getGenres())
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
