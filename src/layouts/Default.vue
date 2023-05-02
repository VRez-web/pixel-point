<script setup lang="ts">
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.w-75 {
  width : 75%;
}
</style>
