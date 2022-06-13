<template>
<div class="container mx-auto">
    <router-link to="/index">
    <div class="flex justify-end mr-5">
            <button class="h-10 w-2/12 rounded-md bg-emerald-400">return</button>
    </div>
    </router-link>
    <p class="text-3xl">PAPER ROLL</p>
    <div class="grid grid-cols-2">
        <div class="">
           <div class="p-5 flex justify-end">
             <span class="inline-block p-2">Series:</span>
            <input class="h-10 w-6/12 p-2 rounded-md focus:outline-none border-2" type="text" name="" id="">
           </div>
           <div class="p-5 flex justify-end">
             <span class="inline-block p-2">Bill of material:</span>
            <input class="h-10 w-6/12 p-2 rounded-md focus:outline-none border-2" type="text" name="" id="">
           </div>
        </div>
        <div>
            <div class="p-5 flex justify-start">
             <span class="inline-block p-2">series:</span>
            <input class="h-10 w-6/12 p-2 rounded-md focus:outline-none border-2" type="text" name="" id="">
           </div>
        </div>
    </div>
    <div v-if="showModal" class="h-52 w-6/12 border bg-white absolute ml-60">
        <div class="w-full h-5 bg-emerald-500"></div>
        <img src="../assets/img/logo.png" class="w-24 place-self-center">
        <div class="mt-5 ml-5 flex justify-start">
            <span class="inline-block p-2">Quantity:</span>
            <input class="h-10 w-6/12 p-2 rounded-md focus:outline-none border-2" type="text" name="" id="">
            <button @click="submitQuantity()" class="h-10 w-3/12 rounded-md bg-emerald-400 ml-2">submit</button>
        </div>
    </div>
    <div class="grid grid-cols-2">
        <div class="p-5">
            <button @click="showModal = !showModal" class="h-20 w-full rounded-md bg-emerald-500">item 1</button>
        </div>
        <div class="p-5">
            <button class="h-20 w-full rounded-md bg-emerald-500">item 2</button>
        </div>
        <div class="p-5">
            <button class="h-20 w-full rounded-md bg-emerald-500">item 3</button>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return{
                showModal: false,
            }
        },
        methods:{
            submitQuantity(){

            }
        }
    }
</script>