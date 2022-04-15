<template>
  <div>this is about page</div>
</template>

<script>
  export default {
    name: "about",
    middleware: (ctx) => {
      console.log("about vue middleware")
    }
  }
</script>

<style scoped>

</style>
