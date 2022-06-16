<template>
<div class="container">
    <div class="flex items-center justify-center  ">
    <div class="px-8 py-6 mt-4 text-left shadow-lg">
        <div class="flex justify-center">
            <img src="../assets/img/logo.png" class="w-40">
        </div>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">User ID :</label>
                            <input type="text" placeholder="user id"
                                class="uppercase w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required>
                            
                </div>
                <div class="mt-4">
                    <label class="block">Password :</label>
                            <input type="password" placeholder="Password"
                                class="uppercase w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="flex items-baseline justify-center">
                    <router-link to="/index">
                        <button class="px-6 py-2 mt-4 text-white bg-emerald-400 rounded-lg hover:bg-emerald-500">Login</button>
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</template>
<style>
</style>