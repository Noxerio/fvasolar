<script setup>
useHead({
  title: 'Chytrá elektrárna | FVA Solar',
  meta: [
    { name: 'description', content: 'Zjistěte, jak fotovoltaické systémy umožňují efektivní využití energie ze slunce pro vaši domácnost. Snížte náklady na elektřinu a přispějte k ochraně životního prostředí. Nabízíme instalaci solárních panelů, poradenství a finanční podporu.' },
    { name: 'keywords', content: 'Fotovoltaické systémy, solární panely, energie ze slunce, úspory energie, obnovitelné zdroje energie, ekologická energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <div>
        <AssetsSubHeader :title="'Chytrá elekrárna'"/>
        <section class="container mx-auto px-5 flex flex-col items-center gap-8 my-12 ">
            <h2 class="text-4xl text-center mb-5">Chytrá elektrárna - TIGO</h2>
            <div class="grid md:grid-cols-2 gap-8 justify-center items-center mb-10">
                <div>
                   <h3 class="text-3xl font-bold">Optimalizace</h3> 
                   <p class="my-5 text-lg font-bold">Zvyšte své energetické výnosy.</p>
                   <p class="leading-8 opacity-70">
Optimizéry Tigo minimalizují vliv stínu a nesoulad výkonu fotovoltaických modulů, proto můžete vytěžit z fotovoltaického systému maximum. Zvýšený energetický výnos díky optimalizaci je vidět na monitorovací platformě Tigo Energy Intelligence.</p>
                </div>
                <video class="rounded-xl drop-shadow-xl" loop="" autoplay="" muted="" playsinline>
                <source src="/img/tigo2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 justify-center items-center mb-10">
                <video class="rounded-xl drop-shadow-xl" loop="" autoplay="" muted="" playsinline>
                <source src="/img/tigo1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
                <div>
                   <h3 class="text-3xl font-bold">Monitorování</h3> 
                   <p class="my-5 text-lg font-bold">Nepřetržitý přehled na úrovni modulů.</p>
                   <p class="leading-8 opacity-70">Tigo Energy Intelligence je nejpodrobnější dostupná platforma pro monitorování na úrovni modulů. Zobrazuje aktuální a historický energetický výkon, příkon a další klíčové ukazatele s přesností na minuty - umožňuje vám nebo vašemu instalatérovi identifikovat problémy a jejich řešení na dálku.</p>
                </div>
                
            </div>

            <div class="grid md:grid-cols-2 gap-8 justify-center items-center mb-10">
                <div>
                   <h3 class="text-3xl font-bold">Bezpečnost</h3> 
                   <p class="my-5 text-lg font-bold">Rychlé vypnutí na úrovni modulu.</p>
                   <p class="leading-8 opacity-70">Systém MLPE společnosti Tigo dokáže snížit výstupní napětí jednotlivých modulů v případě výpadku proudu nebo v případě, že se někdo potřebuje dostat na střechu. Tato funkce je nyní v zemích po celém světě - včetně Spojených států - vyžadována kvůli bezpečnosti prvních záchranářů.</p>
                </div>
                <img src="/img/tigo3.png" class="rounded-xl drop-shadow-xl">
            </div>
        </section>
    </div>
</template>