<template>
  <div id="app">
    <ul id="tree">
      <tree-element :element="root"></tree-element>
    </ul>
    <ul id="palette">
      <blueprint-group v-for="blueprint in blueprints" :group="blueprint"></blueprint-group>
    </ul>

    <button type="button" name="button" v-on:click="$store.dispatch('cloneElement', b({ element: $store.state.root.children[3], parent: $store.state.root.children[1], pos: 0 }))">try clone the apple to Element 1</button>
    <button type="button" name="button" v-on:click="$store.dispatch('cloneElement', b({ element: $store.state.root.children[3], parent: $store.state.root.children[2], pos: 0 }))">try clone the apple to Element 2 which hates apples</button>
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
    this.$store.dispatch('getBlueprints', this.b({}))
    this.$store.dispatch('getTree', this.b({}))
  }
}
</script>

<style>
.element {
  list-style: none;
  background: rgba(0,0,0,0.1);
}
</style>
