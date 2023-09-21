<template>
    <div class="bg-slate-800">
        <div class="container mx-auto px-4 py-3 flex justify-between">
            <div class="flex gap-8 font-semibold text-white justify-center md:justify-normal">
                <p class="flex items-center gap-3"><Icon name="material-symbols:call-outline" size="23" />+420 605 494 441</p>
                <p class="hidden md:flex items-center gap-3"><Icon name="material-symbols:mail-outline" size="23" /> info@fva-solar.cz</p>
            </div>
            <div>
                <NuxtLink to="/nezavaznaPoptavka">
                    <button class="bg-amber-400 text-slate-800 px-8 py-3 rounded-lg font-bold md:block hidden">Nezavázná poptávka</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>