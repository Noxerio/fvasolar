<script setup>
useHead({
htmlAttrs: {
      lang: 'cs'
    },
})
</script>
<template>
    <NuxtLayout>
        <NuxtLoadingIndicator :duration="5000"/>
        <NuxtPage />
    </NuxtLayout>
  </template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');body{
  font-family: 'Comfortaa';
}
</style>