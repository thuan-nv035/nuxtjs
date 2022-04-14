export default ($axios) => ({
  getHome() {
    return $axios.get('/home')
  },
  getProduct() {
    return $axios.get('/product')
  }
})
