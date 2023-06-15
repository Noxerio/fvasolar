<script setup>
    const { data } = await useAsyncData(
        `references`,
        () => queryContent(`references`).findOne()
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