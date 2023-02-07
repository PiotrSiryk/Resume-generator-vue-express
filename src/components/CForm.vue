<template>
  <v-form ref="form">
    <slot></slot>
  </v-form>
</template>

<script setup lang="ts">
defineExpose({ test: "ddd" });
</script>
