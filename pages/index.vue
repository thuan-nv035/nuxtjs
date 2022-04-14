<template>
  <div >
<!--    {{homeData.lastProducts}}-->
    <div v-if="$fetchState.pending">Dang load</div>
    <div v-if="!$fetchState.pending && !$fetchState.error">{{homeData}}</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      homeData: null
    }
  },
  // async asyncData ({ $axios }) {
  //   const {data} = await  $axios.get('/home')
  //   return {
  //     data: data
  //   }
  // },
  async fetch() {
    if(process.client) {
      // thuc thi cac lenh thuoc ve trinh duyet
    }
    // const {data} = await this.$axios.get('/home')
    // this.homeData = await this.$axios.get('/home')
    this.homeData =await this.$repositories.home.getHome();
  },
  fetchOnServer: false
}
</script>
