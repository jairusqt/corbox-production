<script setup>
import Search from '../components/searchWorkOrder.vue'
</script>
<template>
    <div class="container">
        <Search></Search>
        <div class="grid grid-cols-2 col-span-2 mt-10 ">
            <label class="uppercase mb-5 mr-40">Work Order :</label>
            <label class="uppercase mr-80">qty :</label>
            <label class="uppercase mr-48">bom no. :</label>
        </div>
            <div class="grid grid-cols-2 col-span-2 mt-10 px-10">
            <div class="flex justify-center">
              <div class="mb-8">
                <router-link to="/paperrollissuance">
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