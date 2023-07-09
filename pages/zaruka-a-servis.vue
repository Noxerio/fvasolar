<script setup>
 definePageMeta({
    layout: "sub",
    });
</script>
<template>
    <div>
        <AssetsSubHeader :title="'Záruky a servis'"/>
        <div class="container mx-auto px-5 grid md:grid-cols-2 my-8">
            <div class="mb-8">
                <h3 class="mb-4 font-semibold text-2xl opacity-90">Na zařízení se vztahují tyto záruky</h3>
                <ul class="list-disc pl-5 opacity-85 leading-8 text-lg">
                    <li>25 let na 80% výkon fotovoltaického panelu</li>
                    <li>7 let na baterie (10 let po registraci u výrobce)</li>
                    <li>5 let na střídače</li>
                    <li>15 let na mechanické části fotovoltaických panelů</li>
                    <li>5 let odpovědnosti za případné vady práce</li>
                    <li>2 roky na běžné komponenty </li>
                </ul>
            </div>
            <div class="mb-8">
                <h3 class="mb-4 font-semibold  text-2xl opacity-90">Záruční i pozáruční servis</h3>
                <ul class="list-disc pl-5 opacity-85 leading-8 text-lg">
                    <li>Poskytujeme záruční a pozáruční servis </li>
                    <li>Automatizace detekce chyb díky chytrému monitoringu </li>
                    <li>Vzdálené aktualizace nastavených komponentů </li>
                    <li>Dodáváme kvalitní komponenty výrobců dlouho působících na trhu</li>
                    <li>Neváhejte poptat servis</li>
                </ul>
            </div>
        </div>
        <SectionsGuaranty/>
    </div>
</template>