<template>
    <div v-if="!cookieAccepted" class="z-50 w-full mx-auto bg-slate-700 text-white p-10 rounded-t-xl fixed bottom-0 bg-opacity-70 drop-shadow-lg md:flex items-center justify-between gap-8">
      <div>
        <h2 class="font-bold text-lg mb-5 flex items-center gap-8"><Icon name="fluent:cookies-20-regular" size="40" /> Jenom formalita... Cookies?</h2>
        <p class="opacity-70">Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.</p>
        <p class="mt-2"><NuxtLink>Více informací</NuxtLink></p>
      </div>
      <div class="flex gap-4 w-64 mt-10 md:mt-0">
        <button @click="acceptCookies" class="bg-amber-400 rounded-lg py-2 px-4 w-64 text-slate-800 font-bold cursor-pointer">Povolit vše</button>
        <button @click="declineCookies" class="bg-slate-600 rounded-lg py-2 px-4 cursor-pointer">Zamítnout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cookieAccepted: false,
      };
    },
    mounted() {
      // Zkontrolujte, zda uživatel již akceptoval nebo zamítl cookies
      const cookieAccepted = localStorage.getItem('cookieAccepted');
      if (cookieAccepted === 'true') {
        this.cookieAccepted = true;
      }
    },
    methods: {
      acceptCookies() {
        // Nastavte cookieAccepted na true a uložte do localStorage
        this.cookieAccepted = true;
        localStorage.setItem('cookieAccepted', 'true');
      },
      declineCookies() {
        // Nastavte cookieAccepted na true (zamítnuto) a uložte do localStorage
        this.cookieAccepted = true;
        localStorage.setItem('cookieAccepted', 'true');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Vaše stávající styly zůstávají nezměněny */
  </style>
  