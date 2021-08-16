const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 100500']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    inputKeyPress(event) {
     if (event.key === 'Enter') {
       this.addNewNote()
     }
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    doubleCount() {
      return this.notes.length*2
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length*2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue=''
      }
    }
  }
}

Vue.createApp(App).mount('#vue-app')