<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `articles-${path}`,
        () => queryContent(path).findOne()
    );
</script>
<template>
    <section class="container mx-auto px-5 my-10">
        <h2 class="text-center font-bold text-4xl mb-10">{{ data.title }}</h2>
        <div class="mt-8">
            <ContentDoc class="text-lg leading-8"/>
        </div>
    </section>
</template>