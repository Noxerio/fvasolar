<template>
    <div class="w-full bg-[url('/bg-top.png')] bg-cover bg-center bg-fixed">
        <div class="w-full container mx-auto grid md:grid-cols-2 gap-16 items-center py-16 md:py-32 px-5">
  
            <div v-motion-slide-left class="flex flex-col items-start justify-center gap-8 ">
                <h1 class="text-white font-extrabold text-4xl md:text-6xl uppercase">
                    Fotovoltaická elektrárna na klíč</h1>
                <p class="text-white md:text-lg ">Hledáte partnerskou firmu pro Vaši fotovoltaickou elektrárnu? To jste tady správně! Vyplňte poptávkový formulář a do 2 dnů Vás budeme kontaktovat. Sjednejte si schůzku s našim obchodním zástupcem, zjistěte, zda splňujete všechny požadavky pro výstavbu fotovoltaické elektrárny a zároveň získání dotace. Se Vším Vám pomůžeme a vyřešíme za Vás. Těšíme se na budoucí spolupráci.</p>
                <button class="bg-amber-400 text-slate-800 px-8 py-3 rounded-lg font-bold"><Icon name="material-symbols:arrow-circle-down-outline" size="1.5rem"/> Pojdmě se podívat dál</button>
            </div>
            <div  class="justify-center items-center hidden md:flex ">
                <img src="/solar.png">
            </div>
        </div>
    </div>
</template>