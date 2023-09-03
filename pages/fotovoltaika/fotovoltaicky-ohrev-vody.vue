<script setup>
useHead({
  title: 'Fotovoltaický ohřev vody | FVA Solar',
  meta: [
    { name: 'description', content: 'Zjistěte, jak fotovoltaické systémy umožňují efektivní využití energie ze slunce pro vaši domácnost. Snížte náklady na elektřinu a přispějte k ochraně životního prostředí. Nabízíme instalaci solárních panelů, poradenství a finanční podporu.' },
    { name: 'keywords', content: 'Fotovoltaické systémy, solární panely, energie ze slunce, úspory energie, obnovitelné zdroje energie, ekologická energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});
</script>
<template>
    <div>
        <AssetsSubHeader :title="'Fotovoltaický ohřev vody'"/>
        <section class="container mx-auto px-5 flex flex-col items-center gap-8 my-12 ">
            <h2 class="text-4xl text-center mb-5">Fotovoltaický ohřev vody</h2>
            <p class="font-light text-xl text-center">Jste senior nebo invalidní důchodce? Ušetřete za ohřev vody bez velké vstupní investice!</p>
            <div class="grid md:grid-cols-2 items-center justify-center gap-8">
                <ul class=" leading-9 text-lg bg-slate-100 p-10 rounded-xl">
                    <li><Icon name="material-symbols:check-small" size="32" /> Státní dotace až 90 000 Kč</li>
                    <li><Icon name="material-symbols:check-small" size="32" />Jednoduchá instalace bez složité administrativy</li>
                    <li><Icon name="material-symbols:check-small" size="32" />Řešení už systému už od 1 Kč</li>
                </ul>
                <img src="/img/warm.png">
            </div>
            <p class="leading-9 text-center text-lg mb-10">
                <strong>Fotovoltaická elektrárna</strong> je pro Vás finančně nedostupná, nebo nemáte vyhovující střechu? <strong>Fotovoltaický ohřev vody</strong> je tady přímo pro Vás! Kombinace 8 až maximálně 10 panelů, střídače a zásobníku TUV, bez složité administrace. Není třeba vyřizovat připojení do distribuční soustavy pomocí ostrovního systému. Instalace není technicky tolik náročná, má dlouhodobou životnost s minimální údržbou. Dotace jde čerpat z programu NZÚ Light s výplatou formou zálohy.
            </p>
            <div class="mb-10">
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">1</span>Levný ohřev vody díky sluneční energii</h3>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">2</span>Možnost využít stávají boiler</h3>
                </div>
                <div>
                    <h3 class="mb-3 font-bold text-xl"><span class="bg-amber-400 px-3 py-1 rounded-full mr-5">3</span>Cenově jednoduše dostupná varianta</h3>
                </div>
            </div>
            <p class="leading-9 text-center text-lg mb-10">
                Solární ohřev vody s Vámi navrhneme přímo na míru a veškerou administrativu spojenou s podáním dotace na programu Nová zelenám úsporám Ligth (NZU Light), vyřídíme za Vás. Dotace pokryjí 100% nákladů spojených s instalací systému. Řešení od nás je zaměřeno primárně na osoby pobírající starobní, invalidní důchod a nebo příspěvek na bydlení. 
            </p>
            <p class="text-center">Odborné poradenství, cenová nabídka, servis záruční i pozáruční je u nás samozřejmostí. Provedeme kompletní dodávku systému a jeho instalaci do 60 dnů! Cenovou nabídku neobsahuje dodání a montáž boileru. 
</p>
        </section>
    </div>
</template>