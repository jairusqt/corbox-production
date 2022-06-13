<template>
    <router-link to="/index">
    <div class="flex justify-end mr-5">
            <button class="h-10 w-2/12 rounded-md bg-emerald-400">return</button>
    </div>
    </router-link>
    <div>
        <p class="uppercase text-3xl">dashboard</p>
    </div>
    <div class="flex justify-start ml-10">
        <label class="inline-block" for="">Required Quantity:</label>
        <p>800</p>
    </div>
    <div class="grid grid-cols-3">
        <div class="p-5">
            <div class="h-40 bg-emerald-500 w-full border p-5">
            <label class="text-white uppercase text-xl" for="">Prod Cor</label>
            <p class="text-white text-6xl">80</p>
            </div>
        </div>
        <div class="p-5">
            <div class="h-40 bg-emerald-500 w-full border p-5">
            <label class="text-white uppercase text-xl" for="">Staging</label>
            <p class="text-white text-6xl">100</p>
            </div>
        </div>
        <div class="p-5">
            <div class="h-40 bg-emerald-500 w-full border p-5">
            <label class="text-white uppercase text-xl" for="">Prod Convey</label>
            <p class="text-white text-6xl">200</p>
            </div>
        </div>
    </div>
    <div class="w-4/12 mx-auto p-5">
            <div class="h-40 bg-emerald-500 w-full border p-5">
            <label class="text-white uppercase text-xl" for="">FG</label>
            <p class="text-white text-6xl">300/800</p>
            </div>
        </div>
</template>