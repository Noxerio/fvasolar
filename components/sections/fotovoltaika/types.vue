<template>
    <section class="my-20 container mx-auto">
            <h2 class="font-semibold text-center mb-5 text-3xl mt-10">Prozkoumejte typy konstrukcí </h2>
            <div class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-8 mt-10">
                <NuxtLink to="/fotovoltaika/konstrukce/ploche-strechy">
                    <p class="p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-200 cursor-pointer">Ploché střechy</p>
                </NuxtLink>
                <NuxtLink to="/fotovoltaika/konstrukce/sikme-strechy">
                    <p class="p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-200 cursor-pointer">Šikmé střechy</p>
                </NuxtLink>
                <NuxtLink to="/fotovoltaika/konstrukce/vlnity-plech">
                    <p class="p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-200 cursor-pointer">Vlnitý plech</p>
                </NuxtLink>
                <NuxtLink to="/fotovoltaika/konstrukce/falcovane-strechy">
                    <p class="p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-200 cursor-pointer">Falcované střechy</p>
                </NuxtLink>
                <NuxtLink to="/fotovoltaika/konstrukce/trapezove-strechy">
                    <p class="p-5 border-2 border-gray-200 rounded-xl hover:bg-gray-200 cursor-pointer">Trapézové střechy</p>
                </NuxtLink>
            </div>
           </section>
</template>