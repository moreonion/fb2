<template>
  <div id="app">
    <ul id="tree">
      <tree-element :element="root"></tree-element>
    </ul>
    <ul id="palette">
      <blueprint-group v-for="blueprint in blueprints" :group="blueprint"></blueprint-group>
    </ul>
  </div>
</template>

<script>
import treeElement from './components/element.vue'
import blueprintGroup from './components/blueprint-group.vue'

export default {
  name: 'app',
  computed: {
    root () {
      return this.$store.state.root
    },
    blueprints () {
      return this.$store.state.blueprints
    }
  },
  components: {
    treeElement,
    blueprintGroup
  },
  created () {
    this.$store.commit('generateDummyContent')
    this.$store.commit('generateDummyBlueprints')
  }
}
</script>

<style>
.element {
  list-style: none;
  background: rgba(0,0,0,0.1);
}
</style>
