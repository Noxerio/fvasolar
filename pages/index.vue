<script setup>
    const { data } = await useAsyncData(
        `references`
    );
    console.log(data);
</script>
<template>
    <div>
        <div>
        </div>
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