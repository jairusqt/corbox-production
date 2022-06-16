<script setup>
import Search from '../components/searchWorkOrder.vue'
</script>
<template>
    <div class="container">
        <Search></Search>
        
        <div class=""> 
          <div class="grid grid-cols-2 col-span-2 mt-10 ">
            <div class="flex justify-start pl-24 grid row-span-2">
              <label class="uppercase px-5">Work Order :</label>
              <label class="flex justify-end uppercase px-5">bom no. :</label>
            </div>
            <div class="flex justify-start">
              <label class="uppercase pl-20">Quantity :</label>
           </div>
            </div>
           
        </div>
        
        <div class="flex justify-end">
        <router-link to="/dashBoard">
          <button class="border w-24 h-8 rounded-md mr-28">dashboard</button>
        </router-link>
        </div>
            <div class="grid grid-cols-2 col-span-2 mt-10 px-10">
            <div class="flex justify-center">
              <div class="mb-8">
                <router-link to="/paperRoll">
                    <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                        Paper Roll
                    </button>
                </router-link>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-8">
                <router-link to="/boardissuance">
                    <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                        Board Issuance
                    </button>
                </router-link>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-8">
                <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                    Paper Roll Transfer
                </button>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-8">
                <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                    Board Transfer
                </button>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-8">
                <router-link to="/paperRollTagGen">
                    <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                    Paper Roll Generate Tag
                </button>
                </router-link>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="mb-8">
                <router-link to="/boardTagGen">
                    <button class="uppercase w-80 h-16 bg-emerald-500 hover:bg-emerad-600 text-white font-bold py-2 px-4 rounded">
                        Board Generate Tag
                    </button>
                </router-link>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>