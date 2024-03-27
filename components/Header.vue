<script lang="ts" setup>
import { Calendar, Search } from '@element-plus/icons-vue'
// import { formatDate_UTIL } from '@/utils'
const _search = ref('')
const value = ref('uz')
const _time = ref(new Date())
const options = [
   {
      value: 'uz',
      label: "O'zbek",
   },
   {
      value: 'cr',
      label: 'Ўзбек',
   },
   {
      value: 'ru',
      label: 'Русский',
   }
]
onMounted(() => {
   setInterval(() => {
      console.log('fas');

      _time.value = formatDate_UTIL(new Date(), false)
   }, 1000)
})
</script>

<template>
   <header>
      <div class="container !py-2">
         <div class="flex justify-between items-center">
            <div class="flex gap-6 items-center">
               <img class="" src="@/assets/img/logo.svg" />
               <h2 class="text-xl font-poppins-500 text-center">KRIMINOLOGIYA TADQIQODLAR <br /> INSTITUTI</h2>
            </div>
            <div>
               <p class="font-poppins-500 text-center mb-2">{{ _time }}</p>
               <div class="flex gap-6">
                  <el-input v-model="_search" style="width: 200px" placeholder="Qidirish" :prefix-icon="Search" />
                  <el-select v-model="value" placeholder="" style="width: 100px">
                     <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
               </div>
            </div>
         </div>
         <!-- <div class="flex justify-between items-center mt-4">
            <div class="flex justify-between items-center">
               <div class="flex gap-6">
                  <a class="text-sm  text-black/90" href="">BOSH SAHIFA</a>
                  <a class="text-sm  text-black/90" href="">MARKAZ HAQIDA </a>
                  <a class="text-sm  text-black/90" href="">YANGILIKLAR</a>
                  <a class="text-sm  text-black/90" href="">KOMPLAENS</a>
                  <a class="text-sm  text-black/90" href="">HUJJATLAR</a>
                  <a class="text-sm  text-black/90" href="">QAYTA ALOQA</a>
                  <a class="text-sm  text-black/90" href="">poppinsAKTIV XIZMATLAR</a>
               </div>
               <div class="border-l pl-6 ml-4">
                  <i class="ri-search-line font-poppins-900 cursor-popoppins text-xl"></i>
               </div>
            </div>
         </div> -->
      </div>
   </header>
   <HeaderBottom />
   <div >
      <div class="container !my-6 flex gap-3 justify-end ">
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i class="text-white  text-lg ri-facebook-fill"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i class="text-white text-lg ri-instagram-line"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i class="text-white text-lg ri-youtube-fill"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i class="text-white  text-lg ri-send-plane-fill"></i></div>
      </div>
   </div>

</template>
<style>
header {
   position: sticky;
   top: -1px;
   left: 0;
   background-color: #fff;
   z-index: 9;
   box-shadow: 0px 0px 10px rgba(24, 47, 67, 0.1);
   background-image: url(../assets/img/background-pattern.png);
   padding: 6px 0;
   padding-bottom: 11px;
}
</style>
