<template>
    <footer class="bg-slate-800">
        <div  v-motion-pop-visible class="container mx-auto px-5 md:grid grid-cols-2 md:grid-cols-4">
            <div class="py-10">
                <img class="grayscale invert p-8 hidden md:flex" src="/logo.png">
            </div>
            <div class="py-10">
                <ul class="text-white  flex flex-col gap-2">
                    <li class="font-bold text-xl py-2"><a href="">Naše služby</a></li>
                    <li class="opacity-75"><a href="">Fotovoltaika</a></li>
                    <li class="opacity-75"><a href="">Nová zelená úsporám</a></li>
                    <li class="opacity-75"><a href="">Záruka a servis</a></li>
                </ul>
            </div>
            <div class="py-10">
                <ul class="text-white flex flex-col gap-2">
                    <li class="font-bold text-xl py-2"><a href="">Klientská zóna</a></li>
                    <li class="opacity-75"><a href="">Novinky</a></li>
                    <li class="opacity-75"><a href="">Články</a></li>
                    <li class="opacity-75"><a href="">Monitoring</a></li>
                    <li class="opacity-75"><a href="">Nezávazná poptávka</a></li>
                    <li class="opacity-75"><a href="">Ochrana osobních údajů</a></li>
                </ul>
            </div>
            <div class="py-10">
                <ul class="text-white  flex flex-col gap-2">
                    <li class="font-bold text-xl py-2"><a href="">Kontakt</a></li>
                    <li class="opacity-75"><a href=""><Icon name="material-symbols:call-outline" size="23" /> +420 774 229 884</a></li>
                    <li class="opacity-75"><a href=""><Icon name="material-symbols:mail-outline" size="23" /> info@fva-solar.cz</a></li>
                    <li class="opacity-75 flex gap-4 mt-5">
                        <Icon name="fa6-brands:square-facebook" size="23" />
                        <Icon name="bi:instagram" size="23" />
                        <Icon name="ion:logo-youtube" size="23" />
                    </li>
                </ul>
            </div>
        </div>
        <FooterCopyright/>
    </footer>
</template>