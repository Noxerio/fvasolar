<template>
    <section class="container mx-auto flex flex-col gap-2 mt-16 items-center">
        <h2 v-motion-pop-visible class="text-4xl text-center font-bold">Poskytované <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-400 relative inline-block before:rounded-lg">
                <span class="relative text-white drop-shadow-xl">záruky</span>
            </span>na fotovoltaické elektrárny</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-9 justify-center m-5 items-baseline" style="max-width:700px">
            <div v-motion-pop-visible class="flex justify-center items-center rounded-lg h-44 w-44">
                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-center gap-2">
                    <h3 class="text-5xl font-bold text-amber-400">25</h3>
                    <span class="text-black text-xl font-bold">let</span>
                </div>
                <p class="text-center">na výkon FVE panelů</p>
                </div>
            </div>

            <div v-motion-pop-visible class="flex justify-center items-center rounded-lg h-44 w-44">
                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-center gap-2">
                    <h3 class="text-5xl font-bold text-amber-400">15</h3>
                    <span class="text-black text-xl font-bold">let</span>
                </div>
                <p class="text-center">na mechanické části FVE panelů</p>
                </div>
            </div>

            <div v-motion-pop-visible class="flex justify-center items-center rounded-lg h-44 w-44">
                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-center gap-2">
                    <h3 class="text-5xl font-bold text-amber-400">10</h3>
                    <span class="text-black text-xl font-bold">let</span>
                </div>
                <p class="text-center">na baterie</p>
                </div>
            </div>

            <div v-motion-pop-visible class="flex justify-center items-center rounded-lg h-44 w-44">
                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-center gap-2">
                    <h3 class="text-5xl font-bold text-amber-400">5</h3>
                    <span class="text-black text-xl font-bold">let</span>
                </div>
                <p class="text-center">na střídač</p>
                </div>
            </div>
        </div>
    </section>
</template>