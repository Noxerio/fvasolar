<script setup>

</script>

<template>
<section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="/img/hero.mp4" type="video/mp4" autoplay muted loop playsinline></video>
    </div>
    <div class="video-content space-y-2 drop-shadow-2xl">
        <h1 class="font-extrabold text-6xl mb-5">Váš partner v oblasti fotovoltaiky</h1>
        <h3 class="font-light text-3xl">Chytrá elektrárna, ohřev vody, wallbox a mnohem více.</h3>
    </div>
</section>
</template>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>