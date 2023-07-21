<script setup>
useHead({
title: 'Kariéra | FVA Solar',
meta: [
{ name: 'description', content: 'Hledáte kariéru ve fotovoltaice? Jsme lídrem v oboru fotovoltaických systémů a hledáme kvalifikované kandidáty na různé pozice. Pokud máte zájem o práci v oblasti obnovitelných zdrojů energie, kontaktujte nás ještě dnes a domluvte si nezávaznou schůzku.' },
{ name: 'keywords', content: 'fotovoltaika, solární panely, obnovitelné zdroje energie, kariéra, FVA Solar' }
]
}),
 definePageMeta({
    layout: "sub",
    });
</script>
<template>
   <div>
        <AssetsSubHeader :title="'Kariéra'"/>
        <div class="container mx-auto p-8 grid md:grid-cols-2 gap-8">
            <div>
                <h2 class="font-bold text-4xl pb-5">Administrativní pracovník</h2>
                <p class="font-bold pb-5 opacity-60">Na pozici administrativního pracovníka hledáme nového spolehlivého kolegu/kolegyni HPP/DPP , nebo externě OSVČ.</p>
                <h3 class="text-3xl pb-5">Náplň práce:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Zpracovávání podkladů a vyřizování dotací</li>
                    <li>Vyřizování telefonické a emailové komunikace</li>
                </ul>
                <h3 class="text-3xl pb-5 pt-5">Náplň požadavky:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Znalost anglického/německého jazyka</li>
                    <li>Ukončené středoškolské vzdělání s maturitou</li>
                    <li>Znalosti na PC</li>
                    <li>Komunikace je předností</li>
                    <li>Nástup ihned</li>
                </ul>
                <h3 class="text-3xl pb-5 pt-5">Benefity:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Služební PC</li>
                    <li>Služební telefon</li>
                </ul>
            </div>
            <div>
                <h2 class="font-bold text-4xl pb-5">Elektrotechnik</h2>
                <p class="font-bold pb-5 opacity-60">Hledáme elektrotechnika do týmu na pozici montáž a zapojení fotovoltaických panelů (instalace na domech, komerčních budovách) OSVČ, HPP/DPP.</p>
                <h3 class="text-3xl pb-5">Naše požadavky:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>ŘP SK B</li>
                    <li>Vyhláška 50</li>
                    <li>Středoškolské vzdělání bez/s maturitou/s výučním listem</li>
                    <li>Schopnost číst ve schématech a technických dokumentacích</li>
                    <li>Zodpovědnost</li>
                </ul>
                <h3 class="text-3xl pb-5 pt-5">Benefity:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Služební telefon</li>
                    <li>Pracovní oblečení a nářadí</li>
                    <li>Bonusové finanční ohodnocení</li>
                    <li>Pružná pracovní doba s individuálním přístupem</li>
                </ul>
            </div>
            <div>
                <h2 class="font-bold text-4xl pb-5">Elektrotechnik/pomocník</h2>
                <p class="font-bold pb-5 opacity-60">Hledáme zručného elektrotechnika do týmu v zahraničí. Upřednostňujeme ideálně tým lidí (2-5). Jedná se pouze o montážní práce fotovoltaických elektráren na rodinné domy, komerční budovy a instalace na pole. Podmínka OSVČ (aspoň 1 v týmu). Zkušenost je velmi vítána.</p>
                <h3 class="text-3xl pb-5">Naše požadavky:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Jeden automobil na tým. Minimálně 1 osoba v týmu řidičský průkaz skupiny B.</li>
                    <li>Zvládnutí drsnějších podmínek (déšť, ostré slunce).</li>
                    <li>Práce v zahraničí obnáší delší dobu strávenou mimo domov. Montáže na rodinných domech 1-2 týdny. Montáže na polích jsou zpravidla 4-5 týdnů, záleží od Vaší zručnosti a rychlosti.</li>

                </ul>
                <h3 class="text-3xl pb-5 pt-5">Benefity:</h3>
                <ul class="text-lg list-disc pl-6 opacity-90">
                    <li>Velmi atraktivní finanční ohodnocení.</li>
                    <li>Plně hrazené ubytování po celou dobu montáží.</li>
                    <li>Materiál vždy připravený na místě montáže.</li>
                    <li>Nářadí Vám vypůjčíme, ale doporučujeme vlastní.</li>
                    <li>Vyplacení týdně, nejpozději do 2 týdnů OSVČ.</li>
                </ul>
            </div>
        </div>
    </div>
</template>