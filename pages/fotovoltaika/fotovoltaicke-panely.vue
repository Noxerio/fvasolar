<script setup>
    definePageMeta({
    layout: "sub",
    });
</script>

<template>
    <AssetsSubHeader :title="'Fotovoltaické panely'"/>
        <div class="container mx-auto p-8">
          <div class="grid md:grid-cols-2 gap-8 my-5">
            <div class="h-full flex items-center">
              <img src="/img/solar_single.png" class=" h-auto mx-auto hidden md:flex items-center p-32">
            </div>
            <div class="grid md:grid-cols-2 gap-8 my-5">
              <NuxtLink to="/fotovoltaika/monokrystalicke-fotovoltaicke-panely">
                <div class="rounded border-2 border-slate-200 p-10 hover:text-white hover:bg-slate-800 transition-all cursor-pointer h-full">
                  <h2 class="text-xl font-bold mb-4">Monokrystalické solární panely</h2>
                  <p class="mb-2 opacity-85 leading-7">Tyto panely jsou vyrobeny z jednoho kusu krystalu křemíku a mají nejvyšší účinnost využití slunečního záření. Jsou však také nejdražší a mají vyšší náklady na výrobu.</p>
                </div>
              </NuxtLink>
              <NuxtLink to="/fotovoltaika/polykrystalicke-solarni-panely">
              <div class="rounded border-2 border-slate-200 p-10 hover:text-white hover:bg-slate-800 transition-all cursor-pointer h-full">
                <h2 class="text-xl font-bold mb-4">Polykrystalické solární panely</h2>
                <p class="mb-2 opacity-85 leading-7">Tyto panely jsou vyrobeny z křemíkových krystalů, které jsou seskupeny do bloků. Mají nižší účinnost než monokrystalické panely, ale jsou levnější a mají nižší náklady na výrobu.</p>
              </div>
             </NuxtLink>
              <NuxtLink to="/fotovoltaika/tenkovrstve-fotovoltaicke-panely">
              <div class="rounded border-2 border-slate-200 p-10 hover:text-white hover:bg-slate-800 transition-all cursor-pointer h-full">
                <h2 class="text-xl font-bold mb-4">Tenké vrstvy solárních panelů</h2>
                <p class="mb-2 opacity-85 leading-7">Tyto panely jsou vyrobeny pomocí nanotechnologie, která nanáší vrstvy fotovoltaických materiálů na substrát. Jsou tenčí a flexibilnější než jiné druhy panelů, ale mají nižší účinnost a kratší životnost.</p>
              </div>
              </NuxtLink>
              <NuxtLink to="/fotovoltaika/koncentrovane-solarni-panely">
              <div class="rounded border-2 border-slate-200 p-10 hover:text-white hover:bg-slate-800 transition-all cursor-pointer h-full">
                <h2 class="text-xl font-bold mb-4">Koncentrované solární panely</h2>
                <p class="mb-2 opacity-85 leading-7">Tyto panely využívají čočky nebo zrcadla k soustředění slunečního záření na malou plochu panelu. Mají vyšší účinnost než jiné druhy panelů, ale jsou nákladnější a vyžadují speciální zařízení pro instalaci.</p>
              </div>
            </NuxtLink>
            </div>
          </div>     
    <p class="mt-4 text-center font-light">Každý druh panelu má své výhody a nevýhody a vhodnost pro konkrétní aplikaci závisí na různých faktorech, jako jsou náklady, výkon, prostorové omezení a podmínky prostředí.</p>
  </div>
</template>