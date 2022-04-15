<template>
  <div class="container mx-auto">
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
      <router-link :to="{name: 'list-product'}">
        <img class="h-20"
             src="https://www.designersvalley.com/assets/cache/rauf_vector/vector/300x300-6bca9a8bfa849954.jpg"
             alt="logo">
      </router-link>
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="">Trang chủ</a></li>
            <li><a href="">Sản phẩm</a></li>
            <li><a href="">My Account</a></li>
            <li><a href="">Đăng ký</a></li>
            <li><a href="">Đăng nhập</a></li>
          </ul>
        </div>
        <router-link :to="{name:'card-detail'}">
          <div class="md:hidden inline-block ">
            <i class="fa-solid fa-bars text-2xl"></i>
          </div>
          <div class=" relative">
            <!--                        <span class="w-6 h-6 rounded-full flex justify-center -top-3 -right-3 items-center bg-green-400 absolute ">0</span>-->
            <i class="fa-solid fa-cart-plus text-2xl"></i>
            <!--          <img class="w-14 h-14" src="./../assets/cart.svg" alt="">-->
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
