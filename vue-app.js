Vue.createApp({
  data: () => ({
    title: 'I am Darya',
    myHtml: '<h1>Vue 3 app</h1>',
    person: {
      firstName: 'Darya',
      lastName: 'Pavlenko',
      age: 18
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  },
  methods: {
    stopPropogation(event) {
      event.stopPropagation()
    },
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key)
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    log(item) {
      console.log('Lof item: ', item)
    }
  }
}).mount('#vue-app')