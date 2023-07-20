<!-- <script setup>
    const mail = useMail()
    const send = () => {
        mail.send({
            from: 'John Doe',
            subject: 'Incredible',
            text: 'This is an incredible test message',
        })
    }
    
</script> -->
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
            <SectionsTabs/>
            <button @click="send">Odeslat...</button>
        </main>
        
        <ModalsContact/>
    </div>
</template>