<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `articles-${path}`,
        () => queryContent(path).findOne()
    );
</script>
<template>
    <section class="container mx-auto px-5 my-10">
        <h2 class="text-center font-bold text-4xl mb-10">{{ data.title }}</h2>
        <div class="mt-8">
            <ContentDoc class="text-lg leading-8 articles"/>
        </div>
    </section>
</template>

<style>
/* Základní písmo a velikost písma pro všechny tagy */
.articles {
  font-size: 16px;
  line-height: 1.5;
}

/* Nadpisy */
.articles h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.articles h2 {
  font-size: 2rem;
  font-weight: bold;
}

.articles h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Odstavce */
.articles p {
  margin-bottom: 1rem;
}

/* Odkazy */
.articles a {
font-weight: 800; 
text-decoration: none;
}


/* Seznamy */
.articles ul, .articles ol {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

/* Patička */
.articles footer {
  font-size: 0.8rem;
  text-align: center;
  color: #888;
}

</style>