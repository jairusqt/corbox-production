<script setup>
import Search from '../components/searchWorkOrder.vue'
</script>
<template>
    <div class="container">
        <Search></Search>
        
        <div class="grid grid-cols-2 col-span-2 mt-10 ">
            <label class="uppercase">Work Order :</label>
            <label class="uppercase">Quantity :</label>
            <label class="uppercase">bom no. :</label>
        </div>
        <router-link to="/dashBoard">
        <div>
          <button class="bg-emerald-500 text-white w-24 h-8 rounded-md">dashboard</button>
        </div>
        </router-link>
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