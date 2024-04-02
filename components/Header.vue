<script lang="ts" setup>
import { Calendar, Search } from '@element-plus/icons-vue'
// import { formatDate_UTIL } from '@/utils'
import { onClickOutside, type OnClickOutsideHandler } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
const target = ref(null)
const dropdown = ref(false)
const value1 = ref(16)

onClickOutside(target, event => console.log(event))

const dropdownHandler: OnClickOutsideHandler = (event) => {
   console.log('dddddddddd');

   console.log(event)
   dropdown.value = false
}
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
      _time.value = formatDate_UTIL(new Date(), false)
   }, 1000)


})


const activeIndex = ref(0)
function setActive(index) {
   activeIndex.value = index;
}

</script>

<template>
   <header>
      <div class="container !py-2">
         <div class="flex justify-between items-center">
            <div class="flex gap-6 items-center">
               <img class="w-12 h-12" src="@/assets/img/logo1.png" />
               <h2 class=" font-poppins-500 text-center">KRIMINOLOGIYA TADQIQODLAR <br /> INSTITUTI</h2>
            </div>
            <div class="flex gap-4 justify-end items-end">

               <div>
                  <p class="font-poppins-500 text-center mb-2">{{ _time }}</p>
                  <div class="flex gap-6">
                     <el-input v-model="_search" style="width: 200px" placeholder="Qidirish" :prefix-icon="Search" />
                     <el-select v-model="value" placeholder="" style="width: 100px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                     </el-select>
                  </div>
               </div>
               <div class="relative">
                  <i @click.stop="dropdown = !dropdown" class="text-xl cursor-pointer ri-eye-fill"></i>

                  <div v-if="dropdown" v-on-click-outside.bubble="dropdownHandler"
                     class="p-4 rounded shadow-2xl absolute bg-white z-50 -left-52 top-10">
                     <div class="flex gap-2">
                        <div @click="setActive(0)" :class="{ 'active': activeIndex === 0 }"
                           class="child h-11 w-11 bg-gray-600/60 cursor-pointer rounded-xl flex justify-center items-center">
                           <i class="text-2xl ri-settings-5-line"></i>
                        </div>
                        <div @click="setActive(1)" :class="{ 'active': activeIndex === 1 }"
                           class="child h-11 w-11 bg-gray-600/60 cursor-pointer rounded-xl flex justify-center items-center">
                           <img class="w-6" src="@/assets/img/h1.svg" alt="">
                        </div>
                        <div @click="setActive(2)" :class="{ 'active': activeIndex === 2 }"
                           class="child h-11 w-11 bg-gray-600/60 cursor-pointer rounded-xl flex justify-center items-center">
                           <i class="text-2xl ri-moon-fill"></i>
                        </div>
                        <div @click="setActive(3)" :class="{ 'active': activeIndex === 3 }"
                           class="child h-11 w-11 bg-gray-600/60 cursor-pointer rounded-xl flex justify-center items-center">
                           <img class="w-6" src="@/assets/img/h2.svg" alt="">
                        </div>
                     </div>
                     <div class="mt-3">
                         <p>Shrift o'lchami</p>
                        <div class="flex mt-1">
                           <p>A</p>
                           <div class="px-3 w-full">
                              <el-slider :min="16" :max="24" v-model="value1" />
                           </div>
                           <p>A+</p>
                        </div>
                     </div>
                  </div>
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
   <div>
      <div class="container !my-6 flex gap-3 justify-end ">
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i
               class="text-white  text-lg ri-facebook-fill"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i
               class="text-white text-lg ri-instagram-line"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i
               class="text-white text-lg ri-youtube-fill"></i></div>
         <div class="bg-gray/40 hover:bg-gray/80 w-7 h-7 flex justify-center items-center rounded-full"><i
               class="text-white  text-lg ri-send-plane-fill"></i></div>
      </div>
   </div>

</template>
<style>
.dropdown-inner {
   background-color: var(--vp-c-bg);
   padding: 0.5em;
   position: absolute;
   left: 0;
   z-index: 1000;
   background: #fff;
   border-radius: 5px;
   border: 1px solid var(--vp-c-divider);
   box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}

.active {
   background: rgb(122, 122, 220);
}

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
