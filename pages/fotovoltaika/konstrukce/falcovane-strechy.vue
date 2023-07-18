<script setup>
    definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Falcované střechy'"/>
        <div class="container mx-auto px-5 my-10">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="flex justify-center items-center"><img src="/img/fotovoltaic/konstrukce/12.png"></div>
                <div>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Různé druhy příchytek nám umožní uchycení na jakýkoliv falcovaný plech</li>
                        <li>Kotvení přímo na falc bez zásahů do střechy</li>
                        <li>Snadná montáž a demontáž</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <SectionsFotovoltaikaTypes/>
    <SectionsFotovoltaikaProces/>
</template>