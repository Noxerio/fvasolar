<script setup>

  const { data } = await useAsyncData('articles', () => queryContent('/articles').find());
  const articles = useState('articles', () => data.value.slice(0, 8))

</script>
<template>
    <div class="py-32">
        <div class="container mx-auto">
            <h2 class="text-center font-bold text-4xl mb-8">Články</h2>
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center ">
                <div v-for="article in articles" :key="article._path" class="">
                    <NuxtLink :to="article._path">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg h-48" :src="article.Img"/>
                        <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ article.title }}</h5>
                        </div>
                    </div> 
                    </NuxtLink>
                </div>
                
            </div>
        </div>
    </div>
</template>