<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `poptavka-${path}`,
        () => queryContent(path).findOne()
    );
    console.log(data)

</script>
<template>
    <div class="container mx-auto px-5">
        <h2 class="text-2xl text-center">Děkujeme, že jste zvolili náš formulář!</h2>
        <p class="text-center">Vybrali jsme pro vás toto řešení</p>
        <div class="w-96 mx-auto">
            <div class="flex flex-col justify-center my-20 gap-8">


                <a :href="file.file" v-for="file in data.documentFiles" :key="file._path"
                class="bg-slate-100 rounded-xl p-10 flex items-center shadow-lg border-2 border-slate-600 cursor-pointer hover:scale-105 transition-all"
                >
                <Icon name="material-symbols:picture-as-pdf-outline-rounded" size="45" class="opacity-70 text-amber-400"/>
                <div class="ml-10 ">
                    <p class="font-bold text-lg">
                    {{ file.title }}
                </p>
                <p>Zobrazi pdf</p>
                </div>
                
            </a>
                

            </div> 
     
            <div>
            
            </div>
        </div>
    </div>
      

</template>