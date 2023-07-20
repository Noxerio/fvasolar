<script setup>
useHead({
  title: 'Vlnitý plech | FVA Solar',
  meta: [
    { name: 'description', content: 'Vlnitý plech poskytuje skvělou platformu pro instalaci solárních panelů a využití sluneční energie. Získávejte elektřinu díky výhodám vlnitého plechu. Nabízíme instalaci solárních panelů na vlnitý plech, poradenství a podporu při výběru nejefektivnějšího solárního systému.' },
    { name: 'keywords', content: 'Vlnitý plech, solární energie, solární panely, výhody vlnitého plechu, fotovoltaika, čistá energie, zelená energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Vlnitý plech'"/>
        <div class="container mx-auto px-5 my-10">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/11.png"></div>
                <div>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Vhodný konstrukční systém na krytiny plechové, plastové a pozink</li>
                        <li>Vysoká ochrana proti korozi</li>
                        <li>Kotvení přímo do střešních trámů </li>
                        <li>Snadná montáž a demontáž</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <SectionsFotovoltaikaTypes/>
    <SectionsFotovoltaikaProces/>
</template>