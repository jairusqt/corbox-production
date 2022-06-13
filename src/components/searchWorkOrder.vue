<template>
  <div class="container">
    <div class="grid grid-cols-3 col-span-3">
        <img src="../assets/img/logo.png" class="w-40 ml-12 place-self-center">

    <div class="max-w-xs relative space-y-3 mt-5 ">
        <form class="grid place-content-center">   
            <div class="relative ">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none mrgin-l">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input
                
                type="text"
                id="search"
                v-model="searchTerm"
                placeholder="WorkOrder No."  
                class=" block p-2 pl-10 input-w h-10 text-sm text-gray-900
                bg-gray-50 rounded-xl border border-gray-300 
                dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white  
                dark:focus:outline-0
                dark:focus:border-emerald-400" required >
                
                <button type="submit" class="text-white absolute right-0.5 bottom-0.5 bg-emerald-400 hover:bg-emerald-500 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 ">Search</button>
            </div>
          
        </form>

      <ul
        v-if="searchCountries.length"
        class="w-full rounded bg-white border  focus:outline-0 px-4 py-2 space-y-1 absolute z-10"
      >
        <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
          Showing {{ searchCountries.length }} of {{ countries.length }} results
        </li>
        <li
            v-for="country in searchCountries"
            :key="country.name"
            @click="selectCountry(country.name)"
            class="cursor-pointer hover:bg-gray-100 p-1"
        >
          {{ country.name }}
        </li>
      </ul>

      <!-- <p
        v-if="selectedCountry"
        class="text-lg pt-2 absolute"
      >
        You have selected: <span class="font-semibold">{{ selectedCountry }}</span>
      </p> -->
    </div>
    <button class=" place-self-center bg-transparent hover:bg-emerald-200 text-slate-500 hover:text-black border border-gray-300 hover:border-transparent  rounded-xl w-28 hb">
  Back
</button>
  </div>
    </div>
</template>

<script>
import countries from '../data/countries.json'
import {ref, computed} from 'vue'
export default {
  setup() {
    let searchTerm = ref('')
    const searchCountries = computed(() => {
      if (searchTerm.value === '') {
        return []
      }
      let matches = 0
      return countries.filter(country => {
        if (country.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
          matches++
          return country
        }
      })
    });
    const selectCountry = (country) => {
      selectedCountry.value = country
      searchTerm.value = ''
    }
    let selectedCountry = ref('')
    return {
      countries,
      searchTerm,
      searchCountries,
      selectCountry,
      selectedCountry
    }
  }
}
</script>
<style>
.mrgin-l{
    margin-left: 28px;
}
.input-w{
    width: 350px;
    margin-left: 28px;
}
.hb{
    height: 39px;
}
</style>