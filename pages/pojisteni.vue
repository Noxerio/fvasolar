<script setup>
useHead({
title: 'Pojištění fotovoltaiky | FVA Solar',
meta: [
{ name: 'description', content: 'Nová zelená úsporám je program Ministerstva životního prostředí České republiky, který podporuje úspory energie a využívání obnovitelných zdrojů energie v domácnostech. Program nabízí dotace na zateplení budov, výměnu oken a dveří, instalaci solárních panelů a dalších opatření pro snížení energetické náročnosti domácností.' },
{ name: 'keywords', content: 'Nová zelená úsporám, dotace, úspory energie, obnovitelné zdroje energie, zateplení, výměna oken a dveří, solární panely' }
]
}),
 definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <AssetsSubHeader :title="'Pojištění fotovoltaiky'"/>
    <div class="container mx-auto px-5 my-20">
        <h2 class="text-center text-3xl mb-5 font-bold">Spolehlivé pojištění fotovoltaiky a majetku</h2>
        <p class="text-center text-lg mb-5">Fotovoltaická elektrárna je poměrně velká investice, a tak je potřeba ji chránit.</p>
            <ol class="relative border-l border-gray-200 dark:border-gray-700 md:w-1/2 md:mx-auto my-10">                  
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-amber-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Společně se na vše podíváme a připravím pro Vás pojištění na míru bez starostí.
                    </p> 
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-amber-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Budete tak mít jistotu, že Váš majetek bude chráněný před nepředvídanými událostmi, jako jsou například požáry, bouřky nebo vandalismus. 
                    </p>
                </li>
                
            </ol>
        <p class="md:w-1/2 mx-auto text-center mb-10 text-lg leading-8 mt-8">
            Neváhejte mě kontaktovat pro více informací o mých službách a možnostech pojištění. Společně zajistíme, že Vaše investice do fotovoltaiky bude úspěšná a chráněná.
        </p>
        <div class="md:flex items-center gap-8 justify-center">
            <img src="/img/pojisteni.png" class="hidden md:block">
            <div>
                <h4 class="font-bold text-2xl mb-5">Bc. Ivana Bělunková</h4>
                <p>pojišťovací poradce</p>
                <p>Allianz pojišťovny, a.s.</p>
                <p class="font-bold rounded-xl border-2 px-5 py-2 text-center my-5 text-xl">Tel: 732 614 213</p>
            </div>
            <img src="/img/pojisteni.png" class="md:hidden mx-auto">

        </div>
    </div>
</template>