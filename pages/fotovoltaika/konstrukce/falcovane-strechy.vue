<script setup>
useHead({
  title: 'Falcované střechy | FVA Solar',
  meta: [
    { name: 'description', content: 'Falcované střechy nabízejí efektivní možnost pro instalaci solárních panelů a využití sluneční energie. Získávejte elektřinu díky výhodám falcovaných střech. Nabízíme instalaci solárních panelů na falcované střechy, poradenství a podporu při výběru nejlepšího solárního systému.' },
    { name: 'keywords', content: 'Falcované střechy, solární energie, solární panely, výhody falcovaných střech, fotovoltaika, čistá energie, zelená energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Falcované střechy'"/>
        <div class="container mx-auto px-5 my-10">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/12.png"></div>
                <div>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Různé druhy příchytek nám umožní uchycení na jakýkoliv falcovaný plech</li>
                        <li>Kotvení přímo na falc bez zásahů do střechy</li>
                        <li>Snadná montáž a demontáž</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <SectionsFotovoltaikaTypes/>
    <SectionsFotovoltaikaProces/>
</template>