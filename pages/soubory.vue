<script setup>
    const { data } = await useAsyncData('documents', () => queryContent('/documents').find());
    console.log(data.value);
    const firstCategory = data.value[0];
    console.log(firstCategory.title);

    const firstFile = firstCategory.documentFiles[0];
    console.log(firstFile.title);
    console.log(firstFile.file);
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto gap-8 my-8">
        <div v-for="category in data" :key="category._path">
            <ul>
                <li class="font-bold text-xl">{{ category.title }}</li>
                <ul class="list-disc pl-5 leading-8 opacity-90" v-for="file in category.documentFiles" :key="soubor.file">
                    <li class="hover:font-semibold"><a :href="file.file">{{ file.title }}</a></li>
                </ul>
            </ul>
            <div >
            
            </div>
        </div>
    </div>
      

</template>