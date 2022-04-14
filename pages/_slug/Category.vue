<template>
    <div>Category. Slug is {{slug}}</div>
</template>

<script>
    export default {
        name: "Category",
      data() {
          return {
            slug: null
          }
      },
      mounted() {
          this.slug = this.$route.params.slug
      }
    }
</script>

<style scoped>

</style>
