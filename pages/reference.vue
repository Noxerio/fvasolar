<script setup>
const el = ref(null)
const limit = useState("limit", ()=>8);
const skip = useState("skip", ()=>0);
const references = useState("references", ()=>[]);
const fetchData = async ()=>{
    const { data, error } = await useAsyncData(`references-${skip.value}`, () => queryContent('/references').skip(skip.value).limit(limit.value).sort({_path: -1}).find());
    skip.value = limit.value + skip.value
    data.value?.map((reference)=> references.value.push(reference))
}

fetchData();

useInfiniteScroll(
  el,
  async () => {
    console.log("Pěkná sračka")
    await fetchData();
  },
  { distance: 10, interval: 500 },
)
</script>

        

<template>
    <AssetsSubHeader :title="'Reference'" />
    <div class="py-32"  >
        <div class="container mx-auto" >
            <h2 class="text-center font-bold text-4xl mb-8">Mluví za nás
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-950 relative inline-block before:rounded-lg">
                <span class="relative text-white drop-shadow-xl">výsledky</span>
            </span>
            </h2>
            <p class="mb-11 text-center italic opacity-80">Naše realizace fotovoltaických elektráren z blízka na rodinných domech a komerčních budovách.</p>

            <div ref="el" class="h-screen overflow-scroll grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center ">
                <SectionsReferencesReference v-for="reference in references" :key="reference._path" :image="reference.frontImg" :title="reference.title" :path="reference._path"/>
            </div>

        </div>
    </div>

</template>

