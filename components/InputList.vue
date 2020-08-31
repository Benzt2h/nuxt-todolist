<template>
  <v-row class="input-list">
    <v-text-field v-model="text" label="Add List" outlined dense></v-text-field>
    <v-btn rounded color="primary" dark @click="onAdd">Add</v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'InputList',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onAdd() {
      this.$emit('onAdd', this.text)
    },
  },
}
</script>

<style scoped></style>
