<script lang="ts" setup>
import noAvatarPlayer from '@/assets/image/no-avatar-player.png'

interface IProp {
  width?: number
  height?: number
}

defineProps<IProp>()
</script>

<template>
  <img :src="noAvatarPlayer" alt="no avatar player"  :width="width" :height="height">
</template>
