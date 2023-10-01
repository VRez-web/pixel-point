<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <router-link :to="{name:'home'}">
        <v-sheet class="d-flex align-center">
          <img class="v-img w-3" :src="'/logo.svg'">
          <v-sheet class="ml-3 font-weight-bold text-h5">
            <span class="text-orange">Pixel</span><span class="text-blue">Point</span>
          </v-sheet>
        </v-sheet>
      </router-link>
      <v-spacer />
      <v-responsive max-width="260">
        <v-text-field density="compact" hide-details variant="solo" />
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.w-3 {
  width : 2.5%;
}
</style>
