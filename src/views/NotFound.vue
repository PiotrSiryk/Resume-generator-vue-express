<template>
  <div class="not-found-view__container">
    <div class="icon-with-subtitle">
      <v-icon class="not-found-icon">mdi-emoticon-dead-outline</v-icon>
      <div>NOT FOUND</div>
      <div @click="goToMain">Go back</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ResumeNames } from "@/router/resumes.routes";
import router from "@/router/router";
function goToMain() {
  router.push({ name: ResumeNames.Main });
}
</script>
<style lang="scss">
.not-found-view__container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .not-found-icon {
    font-size: 250px;
  }
  .icon-with-subtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
