<template>
  <main class="resume-list__container">
    <template v-for="res in mockResumeList" :key="`resume-card-${res.id}`">
      <ResumeCard :resume-info="res" />
    </template>
    <ResumeCard class="add-new-resume-element__container">
      <div class="add-new-resume-element__content">
        <v-icon>mdi-plus-circle-outline</v-icon>
      </div>
    </ResumeCard>
  </main>
</template>
<script lang="ts" setup>
import type { Resume } from "@/models/resume";
import ResumeCard from "./components/ResumeCard.vue";

const mockResumeList: Resume[] = [
  { id: 1, name: "Resume 1" },
  { id: 2, name: "Resume 2" },
  { id: 3, name: "Resume 3" },
  { id: 4, name: "Resume 4" },
  { id: 5, name: "Resume 5" },
  { id: 6, name: "Resume 6" },
  { id: 7, name: "Resume 7" },
  { id: 8, name: "Resume 8" },
  { id: 9, name: "Resume 9" },
];
</script>
<style lang="scss" scoped>
.resume-list__container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
.add-new-resume-element__container {
  .add-new-resume-element__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    i {
      font-size: 40px;
    }
  }
}
</style>
