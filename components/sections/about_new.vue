<template>
    <section class="container mx-auto px-5 flex flex-col items-center mt-12 md:mt-0 mb-20">
        <h2 v-motion-pop-visible  class="text-center text-4xl font-bold mb-5 leading-9" style="max-width:800px;">Zastřešujeme nejpoužívanejší typy fotovoltaických elektráren</h2>
        <p v-motion-pop-visible  class="text-center text-lg" style="max-width:800px">Zastřešujeme hlavní fotovoltaické elektrárny. Nabízíme kompletní služby od projektu po údržbu. Vaše střecha může být klíčem k udržitelné energetice.
        </p>
        <div class="md:grid grid-cols-3 gap-14" style="max-width:1000px">
            <div class="group hover:scale-110 transition-all relative max-w-xl mx-auto mt-20 text-center h-96">
                <NuxtImg class="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
                <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <NuxtImg class="px-10 invert mb-5 group-hover:hidden" src="/img/fotovoltaic/1.png" width="220"/>
                    <h2 class="text-white text-3xl font-bold drop-shadow-xl group-hover:hidden">Akumulace do baterie</h2>
                    <p class="text-white hidden group-hover:block px-5 text-lg">Fotovoltaická elektrárna ukládá energii přes den do baterií ze kterých večer, nebo ráno čerpáte při nepokryté výrobě.</p>
                </div>
            </div>

            <div class="group hover:scale-110 transition-all relative max-w-xl mx-auto mt-20 text-center h-96">
                <NuxtImg class="h-full w-full object-cover rounded-md" src="/img/bg-benefits.png" alt="Random image"/>
                <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <NuxtImg class="px-10 invert mb-5 group-hover:hidden" src="/img/fotovoltaic/2.png" width="220"/>
                    <h2 class="text-white text-3xl font-bold drop-shadow-xl group-hover:hidden">Bez akumulace</h2>
                    <p class="text-white hidden group-hover:block px-5 text-lg">Fotovoltaická elektrárna částečně pokryje vaše výdaje. Přetoky prodáváte do sítě.</p>
                </div>
            </div>

            <div class="group hover:scale-110 transition-all relative max-w-xl mx-auto mt-20 text-center h-96">
                <NuxtImg class="h-full w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
                <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <NuxtImg class="px-10 invert mb-5 group-hover:hidden" src="/img/fotovoltaic/3.png" width="220"/>
                    <h2 class="text-white text-3xl font-bold drop-shadow-xl group-hover:hidden">Akumulace do vody</h2>
                    <p class="text-white hidden group-hover:block px-5 text-lg">Fotovoltaická elektrárna ukládá přebytečnou energii do ohřevu vody.</p>
                </div>
            </div>
        </div>
    </section>

    
</template>

<style scoped>
 
</style>
