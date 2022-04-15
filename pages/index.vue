<template>
  <div>

    <div v-if="$fetchState.pending">
      <div class="flex items-center justify-center mt-5">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    </div>
    <div v-if="!$fetchState.pending && !$fetchState.error">
      <!--      {{homeData}}-->
      <div class="container  mx-auto">
        <h4 class="text-2xl font-bold mt-5">Sản phẩm mới nhất</h4>
        <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">
          <div class="bg-white shadow col-span-1"
               v-for="(lastProductsItem,lastProductsIndex) in lastProducts" :key="lastProductsIndex">
            <div>
              <nuxt-link :to="{name: 'productDetail',query:{id:lastProductsItem.id}}">
                <img :src="lastProductsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
              </nuxt-link>
              <div class="space-y-4 mt-5 px-4">
                <div class="flex justify-between">
                  <h4 class="uppercase font-extrabold text-xl text-left">{{ lastProductsItem.name }}</h4>
                  <button><i class="fa-regular fa-heart text-xl"></i></button>
                </div>
                <p class="font-bold text-2xl text-red-500 text-left"><span>{{ lastProductsItem.price }}</span></p>
              </div>
              <div class="flex w-full mt-5 items-center justify-between pl-2">
                <div class="flex space-x-2 font-bold">
                  <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                  <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                  <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
                </div>
                <div class="gap-1 flex">
                  <button class="p-3 text-md bg-gray-900 text-white">
                    Add To Cart
                  </button>
                  <button class="p-3 text-md bg-gray-900 text-white"><i class="fa-solid fa-share-nodes"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container  mx-auto">
        <h4 class="text-2xl font-bold mt-5">Sản phẩm hot</h4>
        <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">
          <div class="bg-white shadow col-span-1"
               v-for="(topSoldProductsItem,topSoldProductsIndex) in topSoldProducts" :key="topSoldProductsIndex">
            <div>
              <img :src="topSoldProductsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
              <div class="space-y-4 mt-5 px-4">
                <div class="flex justify-between">
                  <h4 class="uppercase font-extrabold text-xl text-left">{{ topSoldProductsItem.name }}</h4>
                  <button><i class="fa-regular fa-heart text-xl"></i></button>
                </div>
                <p class="font-bold text-2xl text-red-500 text-left"><span>{{ topSoldProductsItem.price }}</span></p>
              </div>
              <div class="flex w-full mt-5 items-center justify-between pl-2">
                <div class="flex space-x-2 font-bold">
                  <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                  <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                  <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
                </div>
                <div class="gap-1 flex">
                  <button class="p-3 text-md bg-gray-900 text-white">
                    Add To Cart
                  </button>
                  <button class="p-3 text-md bg-gray-900 text-white"><i class="fa-solid fa-share-nodes"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container  mx-auto">
        <h4 class="text-2xl font-bold mt-5">Sản phẩm xem nhieu</h4>
        <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">
          <div class="bg-white shadow col-span-1"
               v-for="(topViewProductsItem,topViewProductsIndex) in topViewProducts" :key="topViewProductsIndex">
            <div>
              <img :src="topViewProductsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
              <div class="space-y-4 mt-5 px-4">
                <div class="flex justify-between">
                  <h4 class="uppercase font-extrabold text-xl text-left">{{ topViewProductsItem.name }}</h4>
                  <button><i class="fa-regular fa-heart text-xl"></i></button>
                </div>
                <p class="font-bold text-2xl text-red-500 text-left"><span>{{ topViewProductsItem.price }}</span></p>
              </div>
              <div class="flex w-full mt-5 items-center justify-between pl-2">
                <div class="flex space-x-2 font-bold">
                  <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                  <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                  <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
                </div>
                <div class="gap-1 flex">
                  <button class="p-3 text-md bg-gray-900 text-white">
                    Add To Cart
                  </button>
                  <button class="p-3 text-md bg-gray-900 text-white"><i class="fa-solid fa-share-nodes"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        lastProducts: null,
        topSoldProducts: null,
        topViewProducts: null,
      }
    },
    async fetch() {
      if (process.client) {
        // thuc thi cac lenh thuoc ve trinh duyet
      }
      const resp = await this.$repositories.home.getHome();
      this.lastProducts = resp.lastProducts
      this.topSoldProducts = resp.topSoldProducts
      this.topViewProducts = resp.topViewProducts
    },
    fetchOnServer: false,
    mounted(){
      this.$alert('hello')
    }
  }
</script>
