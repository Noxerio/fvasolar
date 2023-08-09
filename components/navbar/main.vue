
<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 drop-shadow-md">
  <div class="container flex flex-wrap items-center justify-between mx-auto px-4 py-6">
    <NuxtLink to="/">
      <img src="/img/logo.png" class="w-32 mr-3" alt="FVA-SOLAR" />
    </NuxtLink>

    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-amber-400 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
            Úvodní stránka
          </NuxtLink>
        </li>
        
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropFotovoltaika" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Fotovoltaika<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropFotovoltaika" class="z-100 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full">
              <div class="container mx-auto">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400 grid md:grid-cols-4 md:gap-8 md:py-8 px-8 md:px-0" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NuxtLink to="/fotovoltaika/chytra-elektrarna" class="rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_1.png">
                      Chytrá elektrárna
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/fotovoltaika/fotovoltaicke-systemy" class="rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_1.png">
                      Fotovoltaické systémy
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/fotovoltaika/fotovoltaicke-panely" class="rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_2.png">
                      Fotovoltaické panely
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/fotovoltaika/konstrukce" class=" rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_3.png">
                      Konstrukce
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropSluzby" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Služby<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropSluzby" class="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-full">
              <div class="container mx-auto">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400 grid md:grid-cols-4 md:gap-8 md:py-8 px-8 md:px-0" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NuxtLink to="/" class="rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_8.png">
                      Inspekce FVE
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/" class="rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_7.png">
                      Výkup elektřiny
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/nova-zelena-usporam" class=" rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_6.png">
                      Nová zelená úsporám
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/zaruka-a-servis" class=" rounded-xl block px-4 py-2 md:text-lg md:font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:flex md:items-center">
                      <img class="md:block hidden" src="/img/nav/nav_4.png">
                      Záruka a servis
                    </NuxtLink>
                  </li>
                </ul>
              </div>  
            </div>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropKlient" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Klientská zóna<svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropKlient" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NuxtLink to="/reference" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Reference
                    </NuxtLink>
                    <NuxtLink to="https://www.solaxcloud.com/#/login" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Monitoring
                    </NuxtLink>
                    <NuxtLink to="/soubory" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dokumenty
                    </NuxtLink>
                    <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Nezávazná poptávka
                    </NuxtLink>
                  </li>
                </ul>
            </div>
        </li>
        <li>
          <NuxtLink to="/kariera" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Kariéra
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/kontakt" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Kontakt
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>