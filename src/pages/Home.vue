<script lang="ts" setup>

import {onBeforeMount} from "vue";
import {getGames} from "@/services/games";

onBeforeMount(() => getGames())
</script>

<template>
  home
</template>
