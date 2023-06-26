<script setup>
    const { data } = await useAsyncData(
        `references`,
        () => queryContent(`đreferences`).find()
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
            <SectionsTabs/>
        </main>
        
        <ModalsContact/>
    </div>
</template>