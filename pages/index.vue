<template>
  <v-layout column justify-center align-center>
    <v-container>
      <InputList @onAdd="onSave" />
      <TodoList :todo-list="todoList" />
    </v-container>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InputList from '../components/InputList'
import TodoList from '../components/TodoList'

export default {
  name: 'Index',
  components: {
    InputList,
    TodoList,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['todoList']),
  },
  methods: {
    ...mapActions(['setTodoList']),
    onSave(text) {
      this.setTodoList(text)
    },
  },
}
</script>
