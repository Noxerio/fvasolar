<script setup>
    definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <div>
        <AssetsSubHeader :title="'Konstrukce'"/>
        <div class="container mx-auto px-5 py-10">
            <section class="grid md:grid-cols-2 mb-10">
                <div class="flex items-center">
                    <img src="/img/fotovoltaic/logo.png" class="mx-auto  w-96">
                </div>
                <div>
                    <p class="pb-5 text-lg leading-8">Montážní systém je jedním z klíčových prvků Vaší elektrárny. Proto využíváme vysoce kvalitní německý montážní systém K2 systems. K2 Systems je německá společnost specializující se na výrobu a dodávky solárních montážních systémů. Jejich konstrukce je navržena tak, aby byla snadno a rychle instalovatelná, odolná proti vlivům počasí a zároveň esteticky působivá.
                    </p>
                    <p class="pb-5 text-lg leading-8">K2 Systems nabízí několik druhů montážních systémů, které jsou přizpůsobeny pro různé typy střech a solárních panelů. Jejich systémy jsou navrženy tak, aby minimalizovaly poškození střechy a zajistily vysokou stabilitu a pevnost instalovaných panelů.
                    </p>
                    <p class="pb-5 text-lg leading-8">Konstrukce K2 Systems využívá různé materiály, včetně hliníku, nerezové oceli a plastů, které jsou odolné proti vlivům počasí a slunečnímu záření. Systémy jsou navrženy tak, aby byly snadno demontovatelné a opětovně použitelné.
                    </p>
                    <p class="pb-5 text-lg leading-8">Celkově jsou montážní systémy K2 Systems vysoce kvalitní a spolehlivé, což umožňuje snadnou instalaci solárních panelů a maximalizuje výkon solárního systému.
                    </p>
                </div>
            </section>
            <SectionsFotovoltaikaTypes/>
           <SectionsFotovoltaikaProces/>
        </div>
    </div>
</template>