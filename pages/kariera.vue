<script setup>
useHead({
title: 'Kariéra | FVA Solar',
meta: [
{ name: 'description', content: 'Hledáte kariéru ve fotovoltaice? Jsme lídrem v oboru fotovoltaických systémů a hledáme kvalifikované kandidáty na různé pozice. Pokud máte zájem o práci v oblasti obnovitelných zdrojů energie, kontaktujte nás ještě dnes a domluvte si nezávaznou schůzku.' },
{ name: 'keywords', content: 'fotovoltaika, solární panely, obnovitelné zdroje energie, kariéra, FVA Solar' }
]
}),
 definePageMeta({
    layout: "sub",
    });

const { data } = await useAsyncData('jobs', () => queryContent('/jobs').find());
const jobs = useState('jobs', () => data.value.slice(0, 8))

</script>
<template>
   <div>
        <AssetsSubHeader :title="'Kariéra'"/>
        <div class="container mx-auto p-8 grid md:grid-cols-2 gap-8">
            <div v-for="job in jobs" :key="job._path">
            <h2 class="mb-5 font-bold text-4xl">{{ job.title }}</h2>
            <ContentDoc :path="job._path" class="text-lg jobs"/>
            </div>
        </div>
    </div>
</template>
<style >
.jobs h3{
    margin-block: 20px;
    font-size: 25px;
}
.jobs ul{
    list-style:disc;
    margin-left:15px
}
</style>