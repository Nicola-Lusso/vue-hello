var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello World'
  },
})
  new Vue({
  el: "#app",
  data: {
    change: false
  },
  methods: {
    click() {
      this.change = true;
    }
  },
  methods: {
  click () {
    this.change = !this.change
  }
}
})
