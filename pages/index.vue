<template>
  <div >
    <div class="overflow-x-hidden bg-gray-100">
      <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
          <div class="w-full lg:w-8/12">
            <div class="flex items-center justify-between">
              <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
            </div>
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                  <input v-model = "keyWord" type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                  <button @click = "searchBtn()" class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <!--Articles-->
            <div class="mt-6">
              <div v-if="$fetchState.pending">
                <div class="flex items-center justify-center mt-5">
                  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                </div>
              </div>
              <div v-if="!$fetchState.pending && !$fetchState.error" class="flex max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md"
                   v-for="(listArticlesItem,listArticlesIndex) in listArticles.articles" :key="listArticlesIndex">
                <div>
                  <img class="flex-1 w-72 h-72 object-cover" :src="listArticlesItem.urlToImage" alt="">
                </div>
                <div class="w-9/12">

                  <div class="flex items-center justify-between"><span
                    class="font-light text-gray-600">{{ listArticlesItem.publishedAt }}</span><a href="#"
                                                                                                 class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                  </div>
                  <div class="mt-2">

                    <a :href="listArticlesItem.url" class="text-2xl font-bold text-gray-700 hover:underline">{{
                      listArticlesItem.title
                      }}</a>

                    <p class="mt-2 text-gray-600">{{ listArticlesItem.description }}</p>
                  </div>
                  <div class="flex items-center justify-between mt-4"><a href="#"
                                                                         class="text-blue-500 hover:underline">Read
                    more</a>
                    <div><a href="#" class="flex items-center"><img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                      <h1 class="font-bold text-gray-700 hover:underline">{{ listArticlesItem.source.name }}</h1>
                    </a></div>
                  </div>
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
      listArticles: {},
      keyWord: 'bitcoin'
    }
  },
  async fetch() {
    if(process.client) {
      // thuc thi cac lenh thuoc ve trinh duyet
    }
    this.listArticles =await this.$repositories.home.getHome(this.keyWord);
    console.log(this.listArticles)
  },
  fetchOnServer: false
}
</script>
