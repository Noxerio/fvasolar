<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div>
        <header>
            <NavbarTop/>
            <NavbarMain/>
            <Header/>
        </header>
        <main>
            <SectionsAbout/>
            <SectionsHow/>
            <SectionsBenefits/>
            <SectionsEnergyHelp/>
            <SectionsGuaranty/>
            <SectionsContact/>
        </main>
        <Footer/>
        <ModalsContact/>
    </div>
</template>