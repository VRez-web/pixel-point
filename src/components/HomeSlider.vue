<script setup lang="ts">

const props = defineProps({
  images: Array
})
console.log(props)
</script>

<template>
  <v-sheet class="mx-auto w-100">
    <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
    >
      <v-slide-group-item
          v-for="({img}, i) in images"
          :key="i"
          v-slot="{toggle, selectedClass }"
      >
        <v-card
            :class="['ma-4', selectedClass]"
            :image="img"
            height="200"
            width="100"
            @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
