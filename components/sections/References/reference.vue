<script setup>
     const props = defineProps(["title", "image"])
     console.log(props)
</script>
<template>
    <div class="h-76 rounded-xl hover: hover:scale-110 transition-all duration-700 relative flex justify-center">
        <img class=" w-full h-full rounded-xl relative shadow-2xl transition-all duration-700 grayscale hover:grayscale-0 " :src="props.image">
    </div>
</template>