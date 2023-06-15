<script setup>
    const { data } = await useAsyncData(
        `references`,
        () => queryContent(`references`).find()
    );
    console.log(data);
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
            <SectionsContact/>
        </main>
        
        <ModalsContact/>
    </div>
</template>