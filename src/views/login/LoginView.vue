<template>
  <div>
    <CForm ref="loginForm" @submit-form="login">
      <v-text-field
        v-model="loginInfo.name.value.value"
        :error-messages="loginInfo.name.errorMessage.value"
        label="Login"
      ></v-text-field>
      <v-text-field
        v-model="loginInfo.password.value.value"
        :error-messages="loginInfo.password.errorMessage.value"
        type="password"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" @click="handleSubmit">Login</v-btn>
    </CForm>
  </div>
</template>
<script lang="ts" setup>
import CForm from "@/components/CForm.vue";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) {
        return true;
      } else {
        return "Login is required";
      }
    },
    password(value: string) {
      if (value?.length >= 4) {
        return true;
      } else {
        return "Name needs to be at least 4 characters.";
      }
    },
  },
});

function login() {
  handleSubmit((vals) => {
    console.log(vals);
  })();
}

class LoginInfo {
  name = useField("name");
  password = useField("password");
}

const loginInfo = new LoginInfo();

const loginForm = ref<InstanceType<typeof CForm>>();
</script>
<style lang="scss"></style>
