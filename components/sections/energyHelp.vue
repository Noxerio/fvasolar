<template>
    <section class=" w-full bg-[url('/bg-top.png')] bg-fixed bg-cover bg-center border-b-8 border-amber-400">
        <div class="container mx-auto  p-20 md:grid grid-cols-2 gap-8">
            <div >
                <h2 v-motion-pop-visible class="font-bold text-4xl mb-6 text-white">Energetické poradenství</h2>
                <p v-motion-pop-visible class="mb-6 text-white opacity-80">Nabízíme výkup veškerých přebytků či vyrobené elektřiny od domácností i firem za předem sjednané fixované, nebo transparentní velkoobchodní ceny. Elektřinu vykupujeme ze všech zdrojů.</p>
                <ul v-motion-pop-visible class="text-white">
                    <li class="py-1 flex items-center font-bold"><span class="font-bold text-4xl pr-5 text-amber-400">1</span> Zdarma a nezávazně porovnáme Vaši cenu energií a nabídneme Vám výhodnější produkt.</li>
                    <li class="py-1 flex items-center font-bold"><span class="font-bold text-4xl pr-5 text-amber-400">2</span> Pomůžeme se sjednáním smlouvy zdarma.</li>
                    <li class="py-1 flex items-center font-bold"><span class="font-bold text-4xl pr-5 text-amber-400">3</span> Pomůžeme se změnou distribuční sazby zdarma.</li>
                </ul>
            </div>
            <div v-motion-pop-visible class="flex justify-center items-center flex-col gap-8">
                <button class="p-5 bg-amber-400 rounded-xl px-12 font-bold">Konzultace zdarma</button>
            </div>
        </div>
    </section>
</template>