<script setup>
    const { data } = await useAsyncData(
        `references`
    );
    console.log(data);
</script>
<template>
    <div>
        <div>
            <img :src="data.img">
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