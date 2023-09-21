<script setup>

  const { data } = await useAsyncData('articles', () => queryContent('/articles').limit(3).find());
  const articles = useState('articles', () => data.value.slice(0, 8))

</script>
<template>
    <div class="container mx-auto px-5 mb-32">
        <h2 class="text-center font-bold text-4xl mb-10">Mohlo by vás <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-400 relative inline-block before:rounded-lg">
                <span class="relative text-white drop-shadow-xl"> zajímat</span>
            </span></h2>
        <div class="grid md:grid-cols-4 gap-8">
            <NuxtLink :to="post._path" v-for="post in data" :key="post._path" :style="'background-image: url(' + post.Img + ');'" class="bg-slate-400 bg-cover h-64 rounded-lg flex items-end justify-center hover:scale-105 transition-all cursor-pointer">
            <p class="text-2xl font-bold mb-5 px-5 bg-slate-500 rounded-lg py-4 bg-opacity-50 text-white w-full">{{ post.title }}</p>
            </NuxtLink>
            <NuxtLink to="/blog" class="cursor-pointer hover:scale-105 transition-all">
                <div class=" rounded-lg border-4 border-slate-800 flex justify-center items-center h-64">
                    <p class="text-center text-xl font-bold">Zobrazit více</p>
                </div>
            </NuxtLink>
            
        </div>
    </div>
</template>