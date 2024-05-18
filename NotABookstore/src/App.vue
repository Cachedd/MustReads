<script setup>
import NavBar from '@/components/NavBar.vue';
import footerBook from '@/components/PageFooter.vue';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <RouterView />
    <footerBook />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
