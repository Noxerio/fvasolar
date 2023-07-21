<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `news-${path}`,
        () => queryContent(path).findOne()
    );
</script>
<template>
    <section class="container mx-auto px-5 my-10">
        <h2 class="text-center font-bold text-4xl mb-10">{{ data.title }}</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <img :src="data.frontImg" class="rounded-xl">
                <img :src="data.secondImg" class="rounded-xl">
            </div>
            <div><ContentDoc class="text-lg leading-8"/></div>
        </div>
                
        
    </section>
    
</template>