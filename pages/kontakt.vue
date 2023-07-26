<template>
    <section>
        <AssetsSubHeader :title="'Kontakt'"/>
        <div class="container mx-auto px-5 mt-8 mb-8">
            <div class=" rounded-xl">
                <h2 class="text-center p-5 text-4xl font-bold">Neváhejte nás kontaktovat</h2>
                <div class="grid md:grid-cols-2 px-5 text-center p-5 gap-8">
                    <div class="bg-amber-400 rounded-xl p-5">
                        <Icon class="mb-5" name="material-symbols:call-outline" size="48" />
                        <p class="font-bold text-xl">+420 777 555 666</p>
                    </div>
                    
                    <div class="bg-amber-400 rounded-xl p-5">
                        <Icon class="mb-5" name="material-symbols:mail-outline" size="48" />
                        <p class="font-bold text-xl">info@fva-solar.cz</p>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-4xl mt-8">Naše pobočky</h2>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
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