<template>
  <NavBar />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="$route.name" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style>
main {
  padding-top: 68px; /* height of fixed nav */
  min-height: calc(100vh - 68px);
}
</style>
