<template>
  <div class="resume-card__container">
    <slot>
      {{ props.resumeInfo.name }}
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { Resume } from "@/models/resume";

interface Props {
  resumeInfo?: Resume;
}

const props = withDefaults(defineProps<Props>(), {
  resumeInfo: () => new Resume(),
});

console.log(props.resumeInfo);
</script>
<style lang="scss">
.resume-card__container {
  border: 1px solid black;
  width: 210px;
  height: 297px;
  cursor: pointer;
}
.resume-card__container:hover {
  box-shadow: inset 0 0 100px 100px rgba(231, 231, 231, 0.6);
  transition: 200ms;
  transition-timing-function: ease-out;
}
</style>
