<template>
  <el-icon v-if="icon.includes('el-icon')" class="sub-el-icon">
    <component :is="icon" />
  </el-icon>
  <svg-icon v-else :icon="icon" class="iconnn"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.iconnn {
  width: 1em !important;
  height: 1em !important;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
