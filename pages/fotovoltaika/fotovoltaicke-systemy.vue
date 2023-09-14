<script setup>
useHead({
  title: 'Fotovoltaické systémy | FVA Solar',
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
      <AssetsSubHeader :title="'Fotovoltaické systémy'"/>
        <div class="container mx-auto px-5 my-20">
              <h2 class="text-center text-3xl mb-5 font-bold">Fotovoltaické systémy</h2>
              <p class="text-center text-lg mb-5">Trápí Vás zdražování energií? Chcete se stát energeticky nezávislý? Nemáte kde dobít Váš elektromobil? Máme pro Vás řešení! 
              </p>
              <div class="grid md:grid-cols-2 gap-8 mt-20 mb-20">
                <div class=" rounded-xl ">
                  <h3 class="font-bold text-xl mb-5">
                    <Icon name="material-symbols:check-small" size="32" class="text-amber-400"/>
                    Instalace na klíč</h3>
                  <p>
                    S námi získáte více! Poskytneme Vám komplexní a odborné služby od projektů, přes administraci, vyřízení dotace, po samotnou realizaci a zaškolení. Poskytujeme konzultace, záruční a pozáruční servis. Jsme inovativní a rádi se vypořádáme i se složitými instalacemi.
                  </p>
                </div>
                <div class="rounded-xlx">
                  <h3 class="font-bold text-xl mb-5">
                    <Icon name="material-symbols:check-small" size="32" class="text-amber-400"/>
                    Osobní konzultace</h3>
                  <p>
                    Osobně za Vámi dojedeme a sdělíme Vám všechny možnosti fotovoltaického systému. Představíme Vám námi používané technologie, které jsou ve světě jedničkou na trhu! Nakonec provedeme zaměření dronem a 3D vizualizaci elektrárny přímo pro Vás.
                  </p>
                </div>
                <div class="rounded-xl ">
                  <h3 class="font-bold text-xl mb-5">
                    <Icon name="material-symbols:check-small" size="32" class="text-amber-400"/>
                    Vyřídíme dotaci</h3>
                  <p>
                    Dotaci vyřídíme za Vás. Garantujeme získání dotace ve výši až 245 000 Kč.
                  </p>
                </div>
                
                <div class=" rounded-xl">
                  <h3 class="font-bold text-xl mb-5">
                    <Icon name="material-symbols:check-small" size="32" class="text-amber-400"/>
                    Záruka a garance</h3>
                  <p>
                    Na naše technologie výrobci poskytují nadstandardní záruky až 25 let! 
                  </p>
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-8 justify-center items-center mb-10 mt-10">
                <div>
                   <p class="my-5 text-xl font-bold">Pomůžeme Vám se stát energeticky nezávislý</p>
                   <p class="leading-8 opacity-70">Dodáme fotovoltaické elektrárny (FVE) pro snížení každoročních nákladů za energie. Instalace provádíme na střechách rodinných domů, garáží výrobních hal a hospodářských budov. Dodáme Vám projekt na míru Vašim potřebám na klíč.
Získáte odborné poradenství a konzultace, dimenzování systémů a špičkovou projekci. Dodáváme pouze technologie největších hráčů na celosvětovém trhu. Finální instalaci zajistíme v co nejkratší době. Záruční a pozáruční servis je u nás samozřejmostí u námi dodaných systémů. Dotace vám vyřídíme na celý fotovoltaický systém.</p>
                </div>
                <img src="/img/systems1.png" class="rounded-xl">
              </div>
              <div class="grid md:grid-cols-2 gap-8 justify-center items-center mb-10">
                <img src="/img/systems2.png" class="rounded-xl">
                <div>
                   <p class="my-5 text-xl font-bold">Instalujeme pouze kvalitní systémy</p>
                   <p class="leading-8 opacity-70">Dodáváme Vám pouze kvalitní a špičkové fotovoltaické systémy. Díky měničům a bateriím Solax s vysokou energetickou efektivitou, dlouhou životností a profesionální podporou patří Solax ke špičkám po celém světě. Neustálé inovující značka s možností  sledování aktuální spotřeby objektu odkudkoliv přes mobilní aplikaci. S kombinací technologií Tigo budete mít přehled nad výrobou každého panelu na objektu, což značně snižuje výdaje na výměnu poškozených modulů, prodlužuje jejich životnost a zvyšuje efektivitu celého fotovoltaického systému. Díky německému konstrukčnímu systému K2 Systems jsme schopni přeně vypočítat zatížení systému na střechu objektů a získat protokol s podrobným plánem rozložení panelů.</p>
                </div>
              </div>
        </div>
        
    </div>
</template>