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
            <LazySectionsBenefits/>
            <SectionsEnergyHelp/>
            <SectionsGuaranty/>
            <SectionsReferences/>
            <LazySectionsTabs/>
        </main>
        
        <ModalsContact/>
    </div>
</template>