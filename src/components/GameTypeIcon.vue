<script lang="ts" setup>
import LOLMatchIcon from "@/components/ui/icons/lol/LOLMatchIcon.vue";
import CSMatchIcon from "@/components/ui/icons/cs/CSMatchIcon.vue";
import DotaMatchIcon from "@/components/ui/icons/dota/DotaMatchIcon.vue";
import OverwatchMatchIcon from "@/components/ui/icons/overwatch/OverwatchMatchIcon.vue";
import RocketLeagueMatchIcon from "@/components/ui/icons/rocket-league/RocketLeagueMatchIcon.vue";
import RainbowSixMatchIcon from "@/components/ui/icons/rs6/RainbowSixMatchIcon.vue";
import ValorantMatchIcon from "@/components/ui/icons/valorant/ValorantMatchIcon.vue";
import StarCraftMatchIcon from "@/components/ui/icons/star-craft/StarCraftMatchIcon.vue";
import type {Component} from 'vue'
import {computed} from "vue";

interface IGamesIcons {
  [key: number]: Component;
}

interface IProp {
  id: number
}

const props = defineProps<IProp>()
const gameIcons: IGamesIcons = {
  1: LOLMatchIcon,
  3: CSMatchIcon,
  4: DotaMatchIcon,
  14: OverwatchMatchIcon,
  22: RocketLeagueMatchIcon,
  24: RainbowSixMatchIcon,
  26: ValorantMatchIcon,
  29: StarCraftMatchIcon,
}

const icon = computed(() => gameIcons[props.id])
</script>

<template>
  <component :is="icon" />
</template>
