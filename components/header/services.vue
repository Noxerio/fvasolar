<template>
    <div v-motion-fade class="md:grid grid-cols-3 justify-center md:relative container mx-auto md:px-4 bottom-20 rounded-xl z-40">
        <div class="bg-slate-800 p-7 md:rounded-l-xl">
            <h2 class="text-white font-bold text-2xl pb-5 uppercase">INSTALACE FOTOVOLTAIKY</h2>
            <p class="text-white opacity-80">Ušetřete až 80 % nákladů za energie. Veškeré papírování vyřešíme za Vás. Návratnost investice činí maximálně 10 let. Poskytneme Vám individuální přístup a nabídku.</p>
        </div>
        <div class="bg-amber-400 p-8 drop-shadow-2xl">
            <h2 class="text-slate-800 font-bold text-2xl pb-5 uppercase">Vyřízení dotace</h2>
            <p class="text-slate-800 opacity-80">S námi získáte dotaci rychle a spolehlivě. Naše garance vyřízení vám zajistí podporu pro váš projekt.</p>
        </div>
        <div class="bg-slate-800 p-8 md:rounded-r-xl">
            <h2 class="text-white font-bold text-2xl pb-5 uppercase">Kalkulace elektrárny</h2>
            <p class="text-white flex flex-col gap-4">
                Pár kliknutí a máte hotovou předběžnou kalkulaci včetně naší nabídky.
                <NuxtLink to="/contact">
                    <button class="bg-amber-400 text-slate-800 px-8 py-3 rounded-lg font-bold w-fit"><Icon name="material-symbols:arrow-circle-down-outline" size="1.5rem"/> Online kalkulace</button>
                </NuxtLink>
            </p>
        </div>
    </div>
</template>