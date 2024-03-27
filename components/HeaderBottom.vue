<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
const _visible = ref(true)
</script>

<template>
   <div class="bg-gray/40">
      <div class="container flex justify-between items-center ">
         <div class="flex gap-2 ">
            <el-dropdown>
               <button>
                 Vazirlik haqida<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                     <el-dropdown-item>Unversitet 3</el-dropdown-item>
                     <el-dropdown-item>Unversitet 4</el-dropdown-item>
                     <el-dropdown-item>Unversitet 5</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                 Faoliyat<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                     <el-dropdown-item>Unversitet 3</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                 Davlat Xizmatlari<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                     <el-dropdown-item>Unversitet 5</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                Xujjatlar<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                Ochiq malumotlar<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                Axborot Xizmat<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
            <el-dropdown>
               <button>
                Bog'lanish<el-icon class="el-icon--right top-1 font-poppins-700"><arrow-down /></el-icon>
               </button>
               <template #dropdown>
                  <el-dropdown-menu>
                     <el-dropdown-item>Unversitet 1</el-dropdown-item>
                     <el-dropdown-item>Unversitet 2</el-dropdown-item>
                  </el-dropdown-menu>
               </template>
            </el-dropdown>
   
         </div>
         <div @click="_visible = !_visible" class="p-1 px-2 border-l border-r-black/60">
            <i v-if="_visible" class="text-2xl font-poppins-700 ri-menu-line"></i>
            <i v-else class="text-2xl font-poppins-700 ri-close-line"></i>
         </div>
      </div>
   </div>
</template>
<style scoped>
 button{
   font-weight: 700;
   text-transform: capitalize;
   color: black;
   font-size: 16px;
 }
</style>