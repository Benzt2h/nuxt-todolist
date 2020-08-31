<template>
  <v-row class="todo-list">
    <v-card class="mx-auto" width="600" tile>
      <v-list rounded>
        <v-subheader>Todo List</v-subheader>

        <v-list-item-group
          v-for="(list, index) in todoList"
          :key="index"
          color="primary"
        >
          <nuxt-link :to="{ name: 'detail-id', params: { id: list } }">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ list }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'Todolist',
  props: {
    todoList: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
