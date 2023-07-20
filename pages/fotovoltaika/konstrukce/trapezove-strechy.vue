<script setup>
useHead({
  title: 'Trapezové střechy | FVA Solar',
  meta: [
    { name: 'description', content: 'Trapezové střechy jsou ideální pro instalaci solárních panelů a využití sluneční energie. Získávejte elektřinu díky výhodám trapezových střech. Nabízíme instalaci solárních panelů na trapezové střechy, poradenství a podporu při výběru nejlepšího solárního systému.' },
    { name: 'keywords', content: 'Trapezové střechy, solární energie, solární panely, výhody trapezových střech, fotovoltaika, čistá energie, zelená energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Trapezové střechy'"/>
        <div class="container mx-auto px-5 my-10">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/13.png"></div>
                <div>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Vysoká flexibilita umístění panelů horizontálně nebo vertikálně</li>
                        <li>Málo komponentů zajistí rychlou montáž a demontáž</li>
                        <li>Velmi malé rozměry balení a nízkou hmotnost materiálů</li>
                    </ul>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 class="text-2xl mb-5 font-semibold">Typ 5° Elevance s MiniFive </h2>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Možnost přizvednutí panelů o 5°</li>
                        <li>Zajištění větrání modulů a zabránění jejich přehřívání a snížení účinnosti </li>
                    </ul>
                </div>
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/14.png"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/15.png"></div>
                <div>
                    <p>Pomocí softwaru K2 Base, detailně navrhneme konstrukční řešení. Graficky zakreslíme montážní systém na základě kterého se vypočítá zatížení sněhem a větrem. Systém na základě těchto dat automaticky zvolí správné konstrukční řešení a jeho zatížení. Nakonec získáme montážní plán a přesný kusovník. </p>
                </div>
            </div>
        </div>
    </section>
    <SectionsFotovoltaikaTypes/>
    <SectionsFotovoltaikaProces/>
</template>