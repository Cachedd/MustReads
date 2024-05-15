<script setup>
import navBar from './components/navBar.vue';
import footerBook from '@/components/footerBook.vue';
</script>

<template>
  <navBar />
  <RouterView></RouterView>
  <footerBook />
</template>

<style scoped></style>
