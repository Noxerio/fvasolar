<script setup>
  const { data } = await useAsyncData('references', () => queryContent('/references').find());
  const references = useState('references', () => data.value.slice(0, 5))
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
                <SectionsReferencesReference v-for="reference in references" :key="reference._path" :image="reference.frontImg" :title="reference.title" :path="reference._path"/>
            </div>
            <div class="flex justify-center gap-8 items-center mt-20">
                <NuxtLink to="/reference">
                    <button class="px-20 py-5 bg-slate-950 rounded-xl text-white font-bold">Chci vidět vše</button>
                </NuxtLink>
                
            </div>
        </div>
    </div>
</template>