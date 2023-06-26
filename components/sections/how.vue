<template>
    <section class="container mx-auto flex flex-col items-center mt-16 px-5">
        <h2 v-motion-pop-visible  class="text-center text-4xl font-bold" style="max-width:800px">Jak funguje fotovoltaická elektrárna</h2>
        <div  class="grid-cols-2 gap-8 mt-10 md:grid md:grid-cols-3 lg:grid-cols-4 flex flex-col">
            <div v-motion-pop-visible  class="bg-slate-100 p-12 rounded-xl">
                <img src="/functions/1.svg" class="w-full p-5">
                <h3 class="text-center font-bold text-xl py-5">Ráno</h3>
                <p>...nebo když je polojasno, FVE nemůže vyrábět dostatek energie. Baterie se vybijí a ztracená energie se doplní z distribuční sítě.</p>
            </div>
            <div v-motion-pop-visible  class="bg-slate-100 p-10 rounded-xl">
                <img src="/functions/2.svg" class="w-full p-5">
                <h3 class="text-center font-bold text-xl py-5">Během dne</h3>
                <p>...nebo za pěkného počasí FVE vyrobí více energie, než spotřebujete. Přebytek se hromadí v bateriích nebo ohřevu TUV. Nepotřebujete energii z distribuční sítě.</p>
            </div>
            <div v-motion-pop-visible  class="bg-slate-100 p-10 rounded-xl">
                <img src="/functions/3.svg" class="w-full p-5">
                <h3 class="text-center font-bold text-xl py-5">Když se akumulátor vybije</h3>
                <p>...využívá se energie z distribuční sítě. Část kapacity akumulatoru je vyhrazena pro případný výpadek proudu.</p>
            </div>
            <div v-motion-pop-visible class="bg-slate-100 p-10 rounded-xl">
                <img src="/functions/4.svg" class="w-full p-5">
                <h3 class="text-center font-bold text-xl py-5">Večer a v noci</h3>
                <p>..nebo když není sluneční světlo, se energie negeneruje. Uložená energie se využívá k provozu elektrických spotřebičů.</p>
            </div>
        </div>
    </section>
</template>