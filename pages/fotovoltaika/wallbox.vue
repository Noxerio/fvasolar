<script setup>
useHead({
  title: 'Wallbox | FVA Solar',
  meta: [
    { name: 'description', content: 'Tenkovrstvé fotovoltaické panely jsou inovativním a flexibilním řešením pro výrobu elektrické energie. Využijte výhody tenkovrstvých panelů pro sluneční energii. Nabízíme instalaci tenkovrstvých fotovoltaických panelů, poradenství a podporu pro moderní solární technologie.' },
    { name: 'keywords', content: 'Tenkovrstvé fotovoltaické panely, inovativní solární řešení, flexibilní solární technologie, sluneční energie, fotovoltaika, čistá energie, zelená energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Wallbox'"/>
        <div class="container mx-auto px-5 my-20">
            <h2 class="text-center text-3xl mb-5 font-bold">Wall Box</h2>
            <p class="text-center text-lg mb-5">Vítejte ve světě moderního dobíjení s autonabíječkou Solax!</p>
            <div class="md:grid grid-cols-2 items-center justify-center">
                <div class="font-bold text-xl leading-9 p-8 bg-slate-100 rounded-xl">
                    <p>Výkon 7,2 kW / 11kW / 22 kW</p>
                    <p>Konektor Typ 2</p>
                    <p>Dotace až 25 000 Kč v kombinaci s FVE</p>
                </div>
                <div class="">
                    <img src="/img/fotovoltaic/wallbox_top.png">
                </div>
            </div>
            <div>
                <p class="text-center leading-8 mb-5">Dovolte, abychom Vás provedli revolučním způsobem, jakým budete dobíjet své elektrické vozidlo. Autonabíječka Solax přináší špičkovou technologii přímo do Vašeho domova nebo podniku, umožňující Vám dobít vaše vozidlo rychle, efektivně a s maximální pohodlností.
                </p>
                <img class="my-20" src="/img/fotovoltaic/wallbox_main.png">
            </div>
            
            <h2 class="text-center font-bold text-3xl mb-20">Co dělá naši autonabíječku Solax jedinečnou?</h2>
            <div class="md:grid grid-cols-3 mt-5 gap-8 flex flex-col">
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">1</span>Výkon a rychlost</h3>
                    <p class="leading-7">S výkonem až 22 kW umožňuje autonabíječka Solax rychlé dobíjení Vašeho vozidla. Nyní už nemusíte dlouho čekat na plné nabití a můžete vyrazit na cesty dříve.</p>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">2</span>Chytrá kontrola</h3>
                    <p class="leading-7">S naší intuitivní aplikací můžete ovládat dobíjení svého vozidla přímo z vašeho smartphone. Nastavte časový plán, sledujte postup dobíjení a mnohem více, vše na dosah vašich prstů.</p>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">3</span>Flexibilita</h3>
                    <p class="leading-7">Autonabíječka Solax je navržena tak, aby byla kompatibilní s různými modely elektrických vozidel a nabíjecími standardy. Můžete ji bez obav použít pro současné i budoucí vozidlo.</p>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">4</span>Kvalita a bezpečnost</h3>
                    <p class="leading-7">Solax je známý svou inovací a spolehlivostí. Naše autonabíječky jsou navrženy s důrazem na bezpečnost a kvalitu, abyste měli klidnou mysl při každém dobíjení.</p>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">5</span>Ekologie</h3>
                    <p class="leading-7">Přechod na elektrické vozidlo je krokem k lepšímu životnímu prostředí. S autonabíječkou Solax se stáváte součástí této pozitivní změny, podporující udržitelnou budoucnost.</p>
                </div>
            </div>
            <p class="text-center my-20 leading-8">Nabíjení vašeho elektrického vozidla by nemělo být kompromisem mezi rychlostí a kvalitou. S autonabíječkou Solax získáte obojí a ještě mnohem více. Nečekejte a objednejte si ji ještě dnes, abyste začali plně využívat výhody elektrické mobility bez jakýchkoliv omezení.
</p>
            <div class="md:grid grid-cols-2 gap-8 items-center mt-20 flex flex-col">
                <div class="">
                    <img src="/img/fotovoltaic/wallbox_bg.png" class="rounded-xl">
                </div>
                <div>
                    <h3 class="text-xl mb-5 font-bold">Nabíjíme Vaši Cestu K Budoucnosti!</h3>
                    <ul class="leading-8 list-disc pl-4">
                        <li>Nabíjecí kabel (6,5 m) se zástrčkou.</li>
                        <li>Vestavěný proudový chránič typu A 30 mA a 6 mA DC ochrana.</li>
                        <li>Integrovaná ochrana PEN, bez zemnicí tyče.</li>
                        <li>Šifrovaná komunikace založená na TLS.</li>
                        <li>Snadná instalace v interiéru i exteriéru.</li>
                        <li>Integrovaná funkce RFID.</li>
                        <li>Vzdálené nastavení a monitorování pomocí aplikace Solax.</li>
                        <li>Inteligentní řízení dynamického vyrovnávání zátěže.</li>
                        <li>Nastavení časovače pro snížení nákladů během cenové špičky. </li>
                    </ul>
                </div>
            </div>
            <div class="flex items-center justify-center gap-8 mt-20">
                <img src="/img/fotovoltaic/wallbox_app.png" class="w-28">
                <div>
                    <h3 class="text-xl font-bold mb-4">Aplikace Wall boxu Solax </h3>
                    <div class="flex gap-4 items-center justify-center">
                        <img class="w-28" src="/img/app_store.png">
                        <img class="w-28" src="/img/google_play.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>