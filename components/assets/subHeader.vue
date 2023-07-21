<script setup>
    const props = defineProps(["title"])
</script>
<template>
    <div class="bg-amber-400">
        <div class="container mx-auto flex gap-8 items-center justify-between px-5">
            <h1 class="py-5 font-extrabold text-2xl drop-shadow-xl opacity-80">{{ props.title }}</h1>
            <p class="drop-shadow-xl text-white"><NuxtLink to="/">Úvodní stránka</NuxtLink> / <strong class="font-extrabold">{{ props.title }}</strong></p>
        </div>
    </div>
</template>