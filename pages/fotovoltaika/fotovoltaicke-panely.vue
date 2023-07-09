<script>
    definePageMeta({
    layout: "sub",
    });
</script>

<template>
    <AssetsSubHeader :title="'Fotovoltaické panely'"/>
         <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Existuje několik druhů fotovoltaických panelů:</h1>
    
    <ol class="list-decimal pl-6">
      <li class="mb-4">
        <h2 class="text-xl font-bold">Monokrystalické solární panely:</h2>
        <p class="mb-2">Tyto panely jsou vyrobeny z jednoho kusu krystalu křemíku a mají nejvyšší účinnost využití slunečního záření. Jsou však také nejdražší a mají vyšší náklady na výrobu.</p>
      </li>
      
      <li class="mb-4">
        <h2 class="text-xl font-bold">Polykrystalické solární panely:</h2>
        <p class="mb-2">Tyto panely jsou vyrobeny z křemíkových krystalů, které jsou seskupeny do bloků. Mají nižší účinnost než monokrystalické panely, ale jsou levnější a mají nižší náklady na výrobu.</p>
      </li>
      
      <li class="mb-4">
        <h2 class="text-xl font-bold">Tenké vrstvy solárních panelů:</h2>
        <p class="mb-2">Tyto panely jsou vyrobeny pomocí nanotechnologie, která nanáší vrstvy fotovoltaických materiálů na substrát. Jsou tenčí a flexibilnější než jiné druhy panelů, ale mají nižší účinnost a kratší životnost.</p>
      </li>
      
      <li class="mb-4">
        <h2 class="text-xl font-bold">Koncentrované solární panely:</h2>
        <p class="mb-2">Tyto panely využívají čočky nebo zrcadla k soustředění slunečního záření na malou plochu panelu. Mají vyšší účinnost než jiné druhy panelů, ale jsou nákladnější a vyžadují speciální zařízení pro instalaci.</p>
      </li>
    </ol>
    
    <p class="mt-4">Každý druh panelu má své výhody a nevýhody a vhodnost pro konkrétní aplikaci závisí na různých faktorech, jako jsou náklady, výkon, prostorové omezení a podmínky prostředí.</p>
  </div>
</template>