<template>
  <form ref="form" @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: "submitForm"): void;
}>();

function submit(e: any) {
  emit("submitForm");
}
</script>
