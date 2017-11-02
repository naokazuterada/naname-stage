<template lang="pug">

.block(:draggable="draggable" :style="{ 'grid-column': col, 'grid-row': row }")
  span(v-text="label")

</template>

<style lang="sass?indentedSyntax" scoped>

.block
  display: table
  width: 100px
  height: 100px
  z-index: 10
  background-color: #ccc
  span
    display: table-cell
    vertical-align: middle
    text-align: center
    width: 100%
    height: 100%

  &:not([draggable="true"])
    background-color: #ececec
    z-index: 1

</style>

<script>

import Vue from 'vue';

export default Vue.extend({
  props: {
    col: {
      type: Number,
      default: 10
    },
    row: {
      type: Number,
      default: 10
    },
    label: {
      type: String,
      default: ''
    },
    draggable: {
      type: Boolean,
      default: true
    }
  }
});

</script>