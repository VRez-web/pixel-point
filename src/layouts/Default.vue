<script setup lang="ts">
import AppHeader from "@/components/app/AppHeader.vue";
import AppSidebar from "@/components/app/AppSidebar.vue";
</script>

<template>
  <v-app>
    <v-layout class="align-center  bg-white">
      <AppHeader />
      <AppSidebar />
      <v-main class="fill-height">
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
