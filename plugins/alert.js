export default (context, inject)=> {
  //tiem plugin vao context cua nuxt neu chay ssr
  // tiem plugin vao vue root instance neu chay scr
  inject('alert', function (message) {
    alert(message)
  })
}
