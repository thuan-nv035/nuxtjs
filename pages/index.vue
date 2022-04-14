<template>
  <div v-if="data">
    {{data.lastProducts}}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    const {data} = await  $axios.get('/home')
    return {
      data: data
    }
  }
}
</script>
