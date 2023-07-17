<script setup>
    definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <section>
        <AssetsSubHeader :title="'Vlnitý plech'"/>
        <div class="container mx-auto px-5 my-10">
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div></div>
                <div>
                    <ul class="leading-8 list-disc pl-5">
                        <li>Vhodný konstrukční systém na krytiny plechové, plastové a pozink</li>
                        <li>Vysoká ochrana proti korozi</li>
                        <li>Kotvení přímo do střešních trámů </li>
                        <li>Snadná montáž a demontáž</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <SectionsFotovoltaikaTypes/>
    <SectionsFotovoltaikaProces/>
</template>