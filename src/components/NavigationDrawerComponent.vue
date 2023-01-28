<template>
  <v-navigation-drawer>
    <v-list dense rounded>
      <template v-for="item in menuItems" :key="item.title">
        <v-list-item
          v-if="!item.children.length"
          link
          :to="{ name: item.to }"
          >{{ item.title }}</v-list-item
        >
        <v-list-group v-else>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.title"></v-list-item>
          </template>

          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :title="child.title"
            :prepend-icon="child.icon"
            :value="child.title"
            :to="{ name: child.to }"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import menuItems from "@/data/menuItems";
</script>

<style lang="scss" scoped></style>
