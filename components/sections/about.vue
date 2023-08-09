<template>
    <section class="container mx-auto px-5 flex flex-col items-center gap-8 mt-12 md:mt-0">
        <h2 v-motion-pop-visible  class="text-center text-4xl font-bold" style="max-width:800px;line-height: 75px;">Zastřešujeme <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-amber-400 relative inline-block before:rounded-lg">
                <span class="relative text-white drop-shadow-xl">nejpoužívanější</span>
            </span> typy fotovoltaických elektráren</h2>
        <p v-motion-pop-visible  class="text-center text-lg" style="max-width:800px">Zastřešujeme hlavní fotovoltaické elektrárny. Nabízíme kompletní služby od projektu po údržbu. Vaše střecha může být klíčem k udržitelné energetice.




</p>
        <div class="md:grid grid-cols-3 gap-14" style="max-width:1000px">
            <div v-motion-pop-visible  class="text-center  p-5">
                <img class="opacity-50 p-10" src="/img/fotovoltaic/2.png">
                <h3 class="text-xl font-bold mb-3">Fotovoltaická elektrárna bez akumulace</h3>
                <p>Fotovoltaická elektrárna částečně pokryje vaše výdaje. Přetoky prodáváte do sítě.</p>
            </div>
            <div v-motion-pop-visible  class="text-center p-5 bg-slate-100 rounded-xl">
                <img class="opacity-50 p-10" src="/img/fotovoltaic/1.png">
                <h3 class="text-xl font-bold mb-3">Fotovoltaická elektrárna s akumulací do baterie</h3>
                <p>Fotovoltaická elektrárna ukládá energii přes den do baterií ze kterých večer, nebo ráno čerpáte při nepokryté výrobě.</p>
            </div>
            <div v-motion-pop-visible  class="text-center p-5">
                <img class="opacity-50 p-10" src="/img/fotovoltaic/3.png">
                <h3 class="text-xl font-bold mb-3">Fotovoltaická elektrárna s akumulací do vody</h3>
                <p>Fotovoltaická elektrárna ukládá přebytečnou energii do ohřevu vody.</p>
            </div>
        </div>
    </section>
</template>