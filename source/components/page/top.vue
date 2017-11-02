<template lang="pug">

.container(:style="{width: 100*col+'px'}")
  block(v-for="(b,i) in new Array(col*row)" :row="Math.floor(i/col)+1" :col="i%col+1" :draggable="false")
  block(v-for="(b,i) in boxes" :col="b.col" :row="b.row" :label="i")

</template>

<style lang="sass?indentedSyntax" scoped>

.container
  display: grid
  background-color: #cdcdcd
  grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px
  grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px
  // padding: 0
  // grid-gap: 0

.empty-block
  background-color: #ccc
  width: 100px
  height: 100px
  z-index: 0

</style>

<script>

import Vue from 'vue';

Vue.component('block', require('../Block.vue').default);

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
  },
  data: function(){
    return {
      col: 12,
      row: 10
    };
  }
});

</script>