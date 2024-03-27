<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, AutoPlay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = ref([Navigation])

</script>
<template>
   <div class="partner container !my-40">
      <h2 class="text-center font-poppins-600 text-2xl mt-20 mb-12">Hamkorlar</h2>
      <swiper :modules="modules" :navigation="true" :autoplay="{
         delay: 2500,
         disableOnInteraction: false,
      }" 
      :breakpoints="{
         '340': {
            slidesPerView: 1,
            spaceBetween: 20,
         },
         '680': {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         '1024': {
            slidesPerView: 5,
            spaceBetween: 60,
         },
      }">
         <!-- <div class="px-20"> -->
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h1.png" alt="">
               <p class="text-center mt-3">Handong Global University</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h2.jpg" alt="">
               <p class="text-center mt-3">ESMT Berlin</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h3.jpg" alt="">
               <p class="text-center mt-3">MIP POLIMI Graduate School of Management</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="flex flex-col justify-between ">
               <img class="w-full h-56" src="@/assets/img/h4.png" alt="">
               <p class="text-center mt-3">Assowciation of Chartered Certified Accountants (ACCA)</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h5.png" alt="">
               <p class="text-center mt-3">Ajou University</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h1.png" alt="">
               <p class="text-center mt-3">Handong Global University</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h2.jpg" alt="">
               <p class="text-center mt-3">ESMT Berlin</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h3.jpg" alt="">
               <p class="text-center mt-3">MIP POLIMI Graduate School of Management</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div class="flex flex-col justify-between ">
               <img class="w-full h-56" src="@/assets/img/h4.png" alt="">
               <p class="text-center mt-3">Assowciation of Chartered Certified Accountants (ACCA)</p>
            </div>
         </swiper-slide>
         <swiper-slide>
            <div>
               <img class="w-full h-56" src="@/assets/img/h5.png" alt="">
               <p class="text-center mt-3">Ajou University</p>
            </div>
         </swiper-slide>
      </swiper>
   </div>
</template>


<style lang="scss">
.partner {
   .swiper-wrapper {
      justify-content: center;
   }

   .swiper-button-next {
      border-radius: 0px 10px 0px 10px;
      background: #E12C46;
      width: 44px;
      height: 44px;
      bottom: 10px !important;
      // top: auto !important;
      // right: 20px;
      // right: calc(50% - 60px) !important;

      &::after {
         font-size: 18px;
         font-weight: 900;
         color: white !important;
      }
   }

   .swiper-button-prev {
      border-radius: 10px 0px 10px 0px;
      background: #E12C46;
      width: 44px;
      height: 44px;
      bottom: 10px !important;
      // top: auto !important;
      // left: calc(50% - 60px) !important;

      &::after {
         font-size: 18px;
         font-weight: 900;
         color: white !important;
      }
   }

   .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: flex;
      // justify-content: center;
      // align-items: center;
   }
}
</style>