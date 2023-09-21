
<script setup>
useHead({
  title: 'Váš partner v oblasti Fotovoltiky | FVA Solar',
  meta: [
    { name: 'description', content: 'Jsme specializovanou firmou na instalaci fotovoltaiky. Nabízíme profesionální služby v oblasti fotovoltaiky, včetně vyřízení dotací, pravidelných revizí a dalších služeb pro vaši solární energetiku.' },
    { name: 'keywords', content: 'Fotovoltaika, instalace fotovoltaiky, vyřízení dotací, revize, solární energetika, zelená energie' }
  ]
})
</script>
<template>
    <div>
        <Header/>
        <main>
            <SectionsAbout/>
            <SectionsHow/>
            <SectionsBenefits/>
            <SectionsEnergyHelp/>
            <SectionsGuaranty/>
            <SectionsReferences/>
            <SectionsBlog/>
            <SectionsTabs/>
            <SectionsBuy/>
            <div class="fixed w-14 h-14 left-0 mx-auto bg-slate-400 -z-50">
                Hello
            </div>
        </main>
        <!-- <button @click="send">Odeslat...</button> -->

        <ModalsContact/>
        <Cookie/>
    </div>
</template>