export default ($axios) => ({
  getHome(payload) {
    return $axios.get(`?q=${payload}&from=2022-03-18&sortBy=publishedAt&apiKey=bc533a50ce714156896a51f020d3988c`)
  }
})
