<script setup lang="ts">
import AppHeader from "@/components/app/AppHeader.vue";
import AppSidebar from "@/components/app/AppSidebar.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main class="bg-grey-lighten-3">
      <v-container class="w-75">
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container class="d-flex align-start justify-space-between">
                <AppSidebar />
                <div class="w-75 pl-lg-10">
                  <slot />
                </div>
              </v-container>
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
