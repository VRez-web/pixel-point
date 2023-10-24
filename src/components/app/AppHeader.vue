<script setup lang="ts">
import CSIcon from '@/components/ui/icons/CSIcon.vue'
import DotaIcon from '@/components/ui/icons/DotaIcon.vue'
import LOLIcon from '@/components/ui/icons/LOLIcon.vue'
import ValorantIcon from '@/components/ui/icons/ValorantIcon.vue'
import StarCraftIcon from '@/components/ui/icons/StarCraftIcon.vue'
import RocketLeague from '@/components/ui/icons/RocketLeague.vue'
import RainbowSixIcon from '@/components/ui/icons/RainbowSixIcon.vue'
import OverwatchIcon from '@/components/ui/icons/OverwatchIcon.vue'
import type {Component} from 'vue'

interface IGame {
  id: number,
  title: string,
  iconName: Component
}

const games: IGame[] = [
  {id: 1, title: 'Counter-strike', iconName: CSIcon},
  {id: 2, title: 'Dota 2', iconName: DotaIcon},
  {id: 3, title: 'League of Legends', iconName: LOLIcon},
  {id: 4, title: 'Valorant', iconName: ValorantIcon},
  {id: 5, title: 'StarCraft II', iconName: StarCraftIcon},
  {id: 6, title: 'Rocket League', iconName: RocketLeague},
  {id: 7, title: 'Rainbow Six Siege', iconName: RainbowSixIcon},
  {id: 8, title: 'Overwatch', iconName: OverwatchIcon},
]
</script>

<template>
  <v-app-bar flat class="align-start">
    <v-container class="pt-5">
      <div class="w-100 d-flex align-center mb-1">
        <router-link v-for="game in games" :key="game.id" to="/" class="header__game d-flex align-center">
          <component v-if="game.iconName" :is="game.iconName" class="mr-2" />
          {{ game.title }}
        </router-link>
      </div>
      <router-link :to="{name:'home'}" class="logo">
        <v-sheet class="d-flex align-center">
          <img class="v-img w-3" :src="'/logo.svg'" alt="logo">
          <v-sheet class="ml-3 font-weight-bold text-h5">
            <span class="text-orange">Pixel</span><span class="text-blue">Point</span>
          </v-sheet>
        </v-sheet>
      </router-link>
      <v-spacer />
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header__game {
  color      : #282b29;
  transition : all .2s linear;

  &:not(:last-child) {
    margin-right : 30px;
  }

  svg {
    fill       : currentColor;
    transition : all .2s linear;
  }

  &:hover,
  &:active {
    color : #2196f3;

    svg {
      fill : #2196f3;
    }
  }
}

.w-3 {
  width : 25px;
}

.logo {
  width : fit-content;
}
</style>
