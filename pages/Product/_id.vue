<template>
  <div>{{id}}</div>
</template>

<script>
  export default {
    head() {
      return {
        title: "this Product Detail"+ this.id,
        meta: {
          name: "description",
          content:"this is the product detail page" + this.id
        }
      }
    },
    data() {
      return {
        id: ''
      }
    },
    created() {
      this.id = this.$route.params.id
    }
  }
</script>

<style scoped>

</style>
