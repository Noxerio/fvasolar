<template>
    <section>
        <AssetsSubHeader :title="'Kontakt'"/>
        <div class="container mx-auto px-5 mt-8 mb-8">
            <div class=" rounded-xl mb-10">
                <h2 class="text-center p-5 text-4xl font-bold mb-5">Neváhejte nás kontaktovat</h2>
                <div class="grid md:grid-cols-3 gap-8 mb-8">
                    <div class="p-5 border-2 border-black rounded-lg">
                        <h3 class="text-center font-bold text-2xl mb-5 flex items-center justify-center gap-2">František Fiala 
                            <img class="w-5" src="https://cdn.countryflags.com/thumbs/czech-republic/flag-square-500.png">
                        </h3>
                        <div class="text-center">
                            <p class="opacity-70">Sales Director</p>
                            <p>info@fva-solar.cz</p>
                            <p>+420 605 494 441</p>
                        </div>
                    </div>
                    <div class="p-5 border-2 border-black rounded-lg"> 
                        <h3 class="text-center font-bold text-2xl mb-5 flex items-center justify-center gap-2">Nguyen Son
                            <img class="w-5" src="https://cdn.countryflags.com/thumbs/vietnam/flag-square-500.png">
                            <img class="w-5" src="https://cdn.countryflags.com/thumbs/czech-republic/flag-square-500.png">
                        </h3>
                        <div class="text-center">
                            <p class="opacity-70">Sales Representative</p>
                            <p>s.nguyen@fva-solar.cz</p>
                            <p>+420 608 958 888</p>
                        </div>
                    </div>
                    <div class="p-5 border-2 border-black rounded-lg"> 
                        <h3 class="text-center font-bold text-2xl mb-5 flex items-center justify-center gap-2">Michal Pelech
                            <img class="w-5" src="https://cdn.countryflags.com/thumbs/czech-republic/flag-square-500.png">
                        </h3>
                        <div class="text-center">
                            <p class="opacity-70">Sales Manager</p>
                            <p>m.pelech@fva-solar.cz</p>
                            <p>+420 603 194 883</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 class="text-center text-4xl mt-8 mb-10">Naše pobočky</h2>
            <div class="grid grid-cols-1 gap-8 mb-8">
                <div>
                    <h3 class="text-center font-bold text-2xl mb-5">Ostrava</h3>
                    <div class="text-center mb-5">
                        <p>Paskovská 636/275</p>
                        <p>Hrabová</p>
                        <p>720 00 Ostrava</p>
                    </div>
                    <div>
                        <iframe class="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.2504958152285!2d18.29135707684535!3d49.76254483665505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713fae203eaf009%3A0x2966fcae4156d794!2sPaskovsk%C3%A1%20636%2F275%2C%20720%2000%20Ostrava-Hrabov%C3%A1!5e0!3m2!1scs!2scz!4v1689943689743!5m2!1scs!2scz" width="100%" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <SectionsContact/>
        </div>
    </section>    
</template>