<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `news-${path}`,
        () => queryContent(path).findOne()
    );
</script>
<template>
    <div>
        <div>{{ data.title }}</div>
        <div>{{ data.frontImg }}</div>
        <div>{{ data.secondImg }}</div>
        <div><ContentDoc /></div>
    </div>
    
</template>