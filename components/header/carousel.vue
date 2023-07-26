<template>
    <div class="w-full bg-slate-50 bg-cover bg-center bg-fixed border-b-4 border-amber-400">
        <div class="w-full container mx-auto grid md:grid-cols-2 gap-16 items-center py-8 md:py-16 md:pb-32 px-5">
  
            <div v-motion-slide-left class="flex flex-col items-start justify-center gap-8 ">
                <h1 class=" font-extrabold text-4xl md:text-6xl uppercase" style="line-height: 75px;">
                    <span class="text-amber-400 text-stroke-3 drop-shadow-xs">
                        Fotovoltaická 
                    </span>elektrárna na klíč</h1>
                <p class=" md:text-lg ">Hledáte partnerskou firmu pro Vaši fotovoltaickou elektrárnu? To jste tady správně! Vyplňte poptávkový formulář a do 2 dnů Vás budeme kontaktovat. Sjednejte si schůzku s našim obchodním zástupcem, zjistěte, zda splňujete všechny požadavky pro výstavbu fotovoltaické elektrárny a zároveň získání dotace. Se Vším Vám pomůžeme a vyřešíme za Vás. Těšíme se na budoucí spolupráci.</p>
                <button class="bg-amber-400 text-slate-800 px-8 py-3 rounded-lg font-bold"><Icon name="material-symbols:arrow-circle-down-outline" size="1.5rem"/> Pojdmě se podívat dál</button>
            </div>
            <div  class="justify-center items-center hidden md:flex ">
                <img class="w-full" src="/img/solar.svg">
            </div>
        </div>
    </div>
</template>