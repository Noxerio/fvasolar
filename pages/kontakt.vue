<template>
    <section>
        <AssetsSubHeader :title="'Kontakt'"/>
        <div class="container mx-auto px-5 mt-8 mb-8">
            <div class=" rounded-xl">
                <h2 class="text-center p-5 text-4xl font-bold">Neváhejte nás kontaktovat</h2>
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-center font-bold text-2xl mb-5 ">František Fiala 
                            <img className="" src="https://cdn.countryflags.com/thumbs/czech-republic/flag-square-500.png">
                        </h3>
                        <div class="text-center mb-5">
                            <p>info@fva-solar.cz</p>
                            <p>+420 605 494 441</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-center font-bold text-2xl mb-5">Nguyen Son
                            <img src="https://cdn.countryflags.com/thumbs/vietnam/flag-square-500.png">
                            <img src="https://cdn.countryflags.com/thumbs/czech-republic/flag-square-500.png">
                        </h3>
                        <div class="text-center mb-5">
                            <p>s.nguyen@fva-solar.cz</p>
                            <p>+420 608 958 888</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 class="text-center text-4xl mt-8 mb-5">Naše pobočky</h2>
            <div class="grid md:grid-cols-3 gap-8 mb-8">
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
                <div>
                    <h3 class="text-center font-bold text-2xl mb-5">Brno</h3>
                    <div class="text-center mb-5">
                        <p>Cejl 58/72,</p>
                        <p>Zábrdovice</p>
                        <p>602 00 Brno-sever</p>
                    </div>
                    <div>
                        <iframe class="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.9711525311163!2d16.621463189104933!3d49.20110680274464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294f46395bf67%3A0x57627121c996cb13!2sCejl%2058%2F72%2C%20602%2000%20Brno-sever-Z%C3%A1brdovice!5e0!3m2!1scs!2scz!4v1694626878154!5m2!1scs!2scz" width="100%" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                </div>
                <div>
                    <h3 class="text-center font-bold text-2xl mb-5">Zápy</h3>
                    <div class="text-center mb-5">
                        <p>Zápy 245,</p>
                        <p>Zápy 250 61</p>
                        <p>-</p>
                    </div>
                    <div>
                        <iframe class="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.5637623963632!2d14.677018695688961!3d50.16381610675606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bf17ffda4106d%3A0x1168e4b03c7220a!2zWsOhcHkgMjQ1LCAyNTAgMDEgWsOhcHk!5e0!3m2!1scs!2scz!4v1709752943232!5m2!1scs!2scz" width="100%" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                </div>
            </div>
            <SectionsContact/>
        </div>
    </section>    
</template>