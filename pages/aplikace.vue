<script setup>
useHead({
title: 'Aplikace | FVA Solar',
meta: [
{ name: 'description', content: 'Hledáte kariéru ve fotovoltaice? Jsme lídrem v oboru fotovoltaických systémů a hledáme kvalifikované kandidáty na různé pozice. Pokud máte zájem o práci v oblasti obnovitelných zdrojů energie, kontaktujte nás ještě dnes a domluvte si nezávaznou schůzku.' },
{ name: 'keywords', content: 'fotovoltaika, solární panely, obnovitelné zdroje energie, kariéra, FVA Solar' }
]
}),
 definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Aplikace'"/>
        <div class="container mx-auto px-5 my-20">
            <div class="grid grid-cols-3 gap-5">
                <div class="flex justify-center items-center flex-col">
                    <img class="w-52" src="/img/aplikace/tigo.png">
                    <h3 class="text-xl font-bold mt-3 mb-5">Tigo</h3>
                    <div class="flex gap-4 items-center justify-center">
                        <img class="w-28" src="/img/app_store.png">
                        <img class="w-28" src="/img/google_play.png">
                    </div>
                </div>
                <div class="flex justify-center items-center flex-col">
                    <img class="w-52" src="/img/aplikace/solax.png">
                    <h3 class="text-xl font-bold mt-3 mb-5">Solax Cloud</h3>
                    <div class="flex gap-4 items-center justify-center">
                        <img class="w-28" src="/img/app_store.png">
                        <img class="w-28" src="/img/google_play.png">
                    </div>
                </div>
                <div class="flex justify-center items-center flex-col">
                    <img class="w-52" src="/img/aplikace/olife.png">
                    <h3 class="text-xl font-bold mt-3 mb-5">Olife Energy</h3>
                    <div class="flex gap-4 items-center justify-center">
                        <img class="w-28" src="/img/app_store.png">
                        <img class="w-28" src="/img/google_play.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>