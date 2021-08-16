<template>
<form @submit.prevent="onSubmit">
  <input type="text" v-model="title"/>
  <button class="submit-btn" type="submit">Create</button>
</form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit', this.title)
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }

}
</script>

<style>
form {
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
}
input {
  display: inline-block;
  margin-right: 20px;
  width: 400px;
  height: 30px;
}

.submit-btn {
  width: 80px;
  background: springgreen;
}
</style>