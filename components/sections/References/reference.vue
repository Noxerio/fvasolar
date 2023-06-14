<script setup>
     const props = defineProps(["title", "image"])
</script>
<template>
    <div class="h-76 rounded-xl hover: hover:scale-110 transition-all duration-700 relative flex justify-center">
        <img class=" w-full h-full rounded-xl relative shadow-2xl transition-all duration-700 grayscale hover:grayscale-0 " :src="`http://127.0.0.1:1337${props.image}`">
    </div>
</template>