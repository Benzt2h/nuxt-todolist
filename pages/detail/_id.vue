<template>
  <v-container class="detail-id">
    <v-row class="text-center justify-center">
      <v-col v-for="list in oneList" :key="list" cols="12" sm="6" md="3">
        <v-text-field v-model="text" label="list" outlined></v-text-field>
        <v-btn @click="onEdit" class="ma-2" outlined color="indigo">Edit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'DetailId',
  data() {
    return {
      text: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['todoList']),
    oneList() {
      const list = this.todoList.filter(
        (list) => list === this.$route.params.id
      )
      return list
    },
  },
  mounted() {},
  methods: {
    ...mapActions(['editTodoList']),
    onEdit() {
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i] === this.$route.params.id)
          this.todoList[i] = this.text
      }
      this.editTodoList(this.todoList)
      this.$router.push({ name: 'index' })
      /* TODO: ถ้าเป็นแาเรย์ออฟเจ็กเขียนแบบนี้ */
      //   let arr = [{ id: '1' }, { id: '2' }]
      //   arr = arr.map((x) => {
      //     if (x.id === '1') {
      //       x.id = '3'
      //     }
      //     return x
      //   })
      //   this.editTodoList(arr)
    },
  },
}
</script>

<style scoped></style>
