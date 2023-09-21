<script setup>
useHead({
  title: 'Nezávazná poptávka solárního systému | FVA Solar',
  meta: [
    { name: 'description', content: 'Hledáte spolehlivé řešení pro svůj solární systém? Kontaktujte nás pro nezávaznou poptávku. Nabízíme záruku a servis pro optimální fungování vašeho fotovoltaického systému.' },
    { name: 'keywords', content: 'Nezávazná poptávka, solární systém, záruka, servis, fotovoltaický systém, solární panely, údržba, zelená energetika' }
  ]
}),
definePageMeta({
  layout: "sub",
});

     const { data } = await useAsyncData('poptavka', () => queryContent('/poptavka').sort({title: 1}).find());

  import { ref } from 'vue';

      const name = ref('');
      const email = ref('');
      const phone = ref('');
      const successMessage = ref('');
      const errorMessage = ref('');
      const selected = ref('')
  
      const sendEmail = () => {
      const mail = useMail();
  
        mail.send({
          from: 'FVASolar - Emailer',
          subject: 'Nezávazná poptávka',
          text: `Jméno a příjmení: ${name.value}\nEmailová adresa: ${email.value}\nTelefonní číslo: ${phone.value}\nVáš požadavek: ${selected.value}`,
        });

        // Vyčištění formuláře po odeslání
        window.location.href = selected.value;

        name.value = '';
        email.value = '';
        phone.value = '';
        selected.value = '';
        
        // Nastavení úspěšné zprávy
        successMessage.value = 'Email byl úspěšně odeslán';
       

      };
  
      // Funkce pro ověření a odeslání formuláře
      const validateAndSendEmail = () => {
        if (!name.value || !email.value || !phone.value || !selected.value) {
          errorMessage.value = 'Všechny pole musí být vyplněny';
        } else {
          errorMessage.value = ''; // Vyčistění zprávy o chybě
          sendEmail(); // Odeslání emailu pouze pokud je formulář platný
        }
      };
  
  </script>
  
<template>
    <div class="container mx-auto my-20">
        <h2 class="text-center text-3xl mb-10">Nezávazná poptávka</h2>
      <form class="md:w-1/2 mx-auto">
        <!-- Zobrazení chybové zprávy, pokud existuje -->
        <p v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</p>
  
        <!-- Zobrazení úspěšné zprávy, pokud existuje -->
        <p v-if="successMessage" class="text-green-500 mb-2">{{ successMessage }}</p>
  
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jméno a příjmení</label>
          <input
            v-model="name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefonní číslo</label>
          <input
            v-model="phone"
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emailová adresa</label>
          <input
            v-model="email"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poptávám tuto velikost fotovoltaického systému</label>
        <select v-model="selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled value="">Vyberte si z možností</option>
            <option v-for="item in data" :key="item.id" :value="item._path">{{item.title}}</option>
        </select>
        <p class="mt-5">Odesláním souhlasíte se <NuxtLink to="/gdpr" class="font-bold">zpracováním osobních údajů.</NuxtLink></p>
        <button
          type="button"
          @click="validateAndSendEmail"
          class="text-white bg-slate-800 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          Odeslat
        </button>
      </form>
    </div>
  </template>
  
  