<template lang="pug">

.container
  .box(v-for="(b,index) in boxes" draggable="true" :style="{ 'grid-column': b.col, 'grid-row': b.row }")
    span(v-text="index")

</template>

<style lang="sass?indentedSyntax" scoped>

.container
  display: grid
  padding: 0
  background-color: #cdcdcd
  grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px
  grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px
  grid-gap: 0

.box
  background-color: gray
  display: table
  width: 100px
  height: 100px
  span
    display: table-cell
    vertical-align: middle
    text-align: center
    width: 100%
    height: 100%

</style>

<script>

import Vue from 'vue';

export default Vue.extend({
  props: {
    boxes: {
      type: Array,
      default: function() {
        return [
          {row: 1, col: 1},
          {row: 2, col: 2},
          {row: 3, col: 3},
          {row: 4, col: 4}
        ];
      }
    }
  }
});

</script>