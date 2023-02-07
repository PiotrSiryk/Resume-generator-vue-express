<template>
  <div>
    <CForm ref="loginForm">
      <v-text-field v-model="loginInfo.name" label="Login"></v-text-field>
      <v-text-field
        v-model="loginInfo.password"
        label="Password"
      ></v-text-field>
      <v-btn>TESt</v-btn>
    </CForm>
  </div>
</template>
<script lang="ts" setup>
import CForm from "@/components/CForm.vue";
import { ref } from "vue";

const loginForm = ref<InstanceType<typeof CForm>>();

const loginInfo = {
  name: "",
  password: "",
};
</script>
<style lang="scss"></style>
