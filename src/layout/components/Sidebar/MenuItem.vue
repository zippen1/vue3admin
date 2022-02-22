<template>
  <el-icon v-if="icon.includes('el-icon')" class="sub-el-icon">
    <component :is="icon" />
  </el-icon>
  <div v-else>
    <svg-icon :icon="icon" class="iconnn"></svg-icon>
  </div>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
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
