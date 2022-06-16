<template>
  <div class="container" id="app">
    <div class="flex justify-end mb-10"> 
      <div v-show="alert" class=" w-96 flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 justify-center absolute z-50" role="alert">
      <svg class="flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div>
        <span class="font-medium">Warning!</span> Item not found.
      </div>
    </div>
    </div>
    <div class="grid grid-cols-3 col-span-3">
        <img src="../assets/img/logo.png" class="w-40 ml-12 place-self-center">
  
      <div class="max-w-xs relative space-y-3 mt-5 ">
          <div class="grid place-content-center">   
              <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none mrgin-l">
                      <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input
                  type="text"
                  placeholder="WorkOrder No."  
                  class=" block p-2 pl-10 input-w h-10 text-sm text-gray-900
                  bg-gray-50 rounded-xl border border-gray-300 
                  dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white  
                  dark:focus:outline-0
                  dark:focus:border-emerald-400">
                  <button @click="alert = !alert"
                    class=" text-white absolute right-0.5 bottom-0.5 bg-emerald-400 hover:bg-emerald-500 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 "
                  >Search</button>
              </div>
               
            </div> 
            
      </div>
      <button class=" place-self-center bg-transparent hover:bg-emerald-200 text-slate-500 hover:text-black border border-gray-300 hover:border-transparent  rounded-xl w-28 hb">
        Back
      </button>
    </div>
  </div>  
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    
  },
  updated(){
    setTimeout(() => this.alert = false, 3000)
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
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