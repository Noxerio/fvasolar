<script setup>
  const { data: references } = await useFetch('/api/references')
</script>
<template>
    <div class="py-32">
        <div class="container mx-auto">
            <h2 class="text-center font-bold text-4xl mb-8">Mluví za nás
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-950 relative inline-block before:rounded-lg">
                <span class="relative text-white drop-shadow-xl">výsledky</span>
            </span>
            </h2>
            <p class="mb-11 text-center italic opacity-80">Naše realizace fotovoltaické elektrárny na rodinných domech, komerčních budovách a náhled pozemních instalací.</p>
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center ">
                <ReferencesReference v-for="reference in references.data" :key="references.id" :image="reference.attributes.image.data.attributes.url" :title="reference.attributes.title"/>
            </div>
            <div class="flex justify-center gap-8 items-center mt-20">
                <button class="px-20 py-5 bg-slate-950 rounded-xl text-white font-bold">Chci vidět vše</button>
                <button class="px-20 py-5 border-slate-950  border-2 rounded-xl text-slate-950 font-bold">Načíst část</button>
            </div>
        </div>
    </div>
</template>