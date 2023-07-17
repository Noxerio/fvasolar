<script setup>
    const mail = useMail()
    const send = () => {
        mail.send({
            from: 'John Doe',
            subject: 'Incredible',
            text: 'This is an incredible test message',
        })
    }
    
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