<template>
    <footer class="bg-slate-800">
        <div  v-motion-pop-visible class="container mx-auto px-5 md:grid grid-cols-2 md:grid-cols-4">
            <div class="py-10">
                <img class="grayscale invert p-8 hidden md:flex" src="/img/logo.png">
            </div>
            <div class="py-10">
                <ul class="text-white  flex flex-col gap-2">
                   
                    <li class="font-bold text-xl py-2">Naše služby</li>
                    <NuxtLink to="/inspekce-fve">
                        <li class="opacity-75">Inspekce FVE</li>
                    </NuxtLink>
                    <NuxtLink to="/vykup-elektriny">
                        <li class="opacity-75">Výkup elektřiny</li>
                    </NuxtLink>
                    <NuxtLink to="/nova-zelena-usporam">
                        <li class="opacity-75">Nová zelená úsporám</li>
                    </NuxtLink>
                    <NuxtLink to="/zaruka-a-servis">
                        <li class="opacity-75">Záruka a servis</li>
                    </NuxtLink>
                </ul>
            </div>
            <div class="py-10">
                <ul class="text-white flex flex-col gap-2">
                    <li class="font-bold text-xl py-2">Klientská zóna</li>
                    <NuxtLink to="/reference">
                        <li class="opacity-75">Reference</li>
                    </NuxtLink>
                    <NuxtLink to="/aplikace">
                        <li class="opacity-75">Aplikace</li>
                    </NuxtLink>
                    <NuxtLink to="/dokumenty">
                        <li class="opacity-75">Dokumenty</li>
                    </NuxtLink>
                        <li class="opacity-75"><a href="https://www.solaxcloud.com/#/login">Monitoring</a></li>
                    <NuxtLink to="/gdpr">
                        <li class="opacity-75">Ochrana osobních údajů</li>
                    </NuxtLink>
                </ul>
            </div>
            <div class="py-10">
                <ul class="text-white  flex flex-col gap-2">
                    <li class="font-bold text-xl py-2"><a href="">Kontakt</a></li>
                    <li class="opacity-75"><a href=""><Icon name="material-symbols:call-outline" size="23" /> +420 605 494 441</a></li>
                    <li class="opacity-75"><a href=""><Icon name="material-symbols:mail-outline" size="23" /> info@fva-solar.cz</a></li>
                    <li class="opacity-75 flex gap-4 mt-5">
                        <a href="https://www.instagram.com/fva_solar_cz/">
                            <Icon name="bi:instagram" size="23" />
                        </a>
                        <a href="https://m.facebook.com/fvasolar/">
                            <Icon name="fa6-brands:square-facebook" size="23" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCppBKHyT5VEBWDe32nfkkPw/search">
                            <Icon name="ion:logo-youtube" size="23" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <FooterCopyright/>
    </footer>
</template>