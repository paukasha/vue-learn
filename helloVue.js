// const Counter = {
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   mounted() {
//     setInterval(() => {
//       this.counter++
//     }, 1000)
//   }
// }
// window.Vue.createApp(Counter).mount('#hello-vue')
const Attribute = new Vue({
  el: '#bind-attribute',
  data() {
    return {
      message: 'Hi my name is Darya' + new Date().toLocaleString()
    }
  }
})


const Cicle = new Vue({
  el: '#cicle-if',
  data: {
    seen: true
  }
})

const listsOfArrays = new Vue({
  el: '#listsOfArrays',
  data: {
    todos: [
      {text: 'I learn Vue.js'},
      {text: 'hello Vue.js'},
    ]
  }
})

const reverseMessage = new Vue({
  el: '#events',
  data: {
    message: 'Hello Vuejs'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
})

const vModel = new Vue({
  el: '#v-model',
  data: {
    message: 'Today is sunday'
  },
})


window.Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})


const app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      {id:0, text: 'One item'},
      {id:1, text: 'Second item'},
    ]
  }
})