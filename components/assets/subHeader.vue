<script setup>
    const props = defineProps(["title"])
</script>
<template>
    <div class="bg-amber-400">
        <div class="container mx-auto">
            <h1 class="py-16 text-center font-bold text-3xl">{{ props.title }}</h1>
        </div>
    </div>
</template>