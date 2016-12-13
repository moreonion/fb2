<template>
  <div id="app">
    <ul id="tree">
      <tree-element :element="root"></tree-element>
    </ul>
  </div>
</template>

<script>
import treeElement from './components/element.vue'

export default {
  name: 'app',
  computed: {
    root () {
      return this.$store.state.root
    }
  },
  components: {
    treeElement
  },
  created () {
    this.$store.commit('generateDummyContent')
  }
}
</script>

<style>
.element {
  list-style: none;
  background: rgba(0,0,0,0.1);
}
</style>
