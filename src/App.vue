<template>
  <v-app>
    <NavigationDrawerComponent></NavigationDrawerComponent>
    <v-main class="main-app">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationDrawerComponent from "./components/NavigationDrawerComponent.vue";
</script>

<style scoped>
main.main-app {
  width: 100%;
  height: 100%;
}
</style>
