<script setup>
     const props = defineProps(["title", "image", "path"])
     console.log(props)
</script>
<template>
    <div class="h-76 rounded-xl hover: hover:scale-110 transition-all duration-700 relative flex justify-center">
        <NuxtLink :to="props.path">
            <NuxtPicture class=" w-full h-full rounded-xl relative shadow-2xl transition-all duration-700 grayscale hover:grayscale-0 " :src="props.image"/>
        </NuxtLink>
    </div>
</template>