<template>
    <div class="container mx-auto">
      <h2 class="text-center text-2xl my-10 font-bold">Objednání servisu / poruchy</h2>
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
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emailová adresa</label>
          <input
            v-model="email"
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Váš požadavek</label>
          <textarea
            v-model="message"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          ></textarea>
        </div>
        <p class="mt-5 mb-5">Odesláním souhlasíte se <NuxtLink to="/gdpr" class="font-bold">zpracováním osobních údajů.</NuxtLink></p>

        <button
          type="button"
          @click="validateAndSendEmail"
          class="text-white bg-slate-800 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Odeslat
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
      const successMessage = ref('');
      const errorMessage = ref('');
  
      const sendEmail = () => {
        const mail = useMail();
  
        mail.send({
          from: 'FVASolar - Emailer',
          subject: 'Servis a opravy',
          text: `Jméno a příjmení: ${name.value}\nEmailová adresa: ${email.value}\nVáš požadavek: ${message.value}`,
        });
  
        // Vyčištění formuláře po odeslání
        name.value = '';
        email.value = '';
        message.value = '';
  
        // Nastavení úspěšné zprávy
        successMessage.value = 'Email byl úspěšně odeslán';
      };
  
      // Funkce pro ověření a odeslání formuláře
      const validateAndSendEmail = () => {
        if (!name.value || !email.value || !message.value) {
          errorMessage.value = 'Všechny pole musí být vyplněny';
        } else {
          errorMessage.value = ''; // Vyčistění zprávy o chybě
          sendEmail(); // Odeslání emailu pouze pokud je formulář platný
        }
      };
  
      return {
        name,
        email,
        message,
        successMessage,
        errorMessage,
        validateAndSendEmail,
      };
    },
  };
  </script>
  