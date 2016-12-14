<template>
  <li class="element">
    <h3>
      {{ name }}
      <button type="button" name="button" v-on:click="$store.dispatch('deleteElement', { element })">Delete</button>
    </h3>
    <ul v-if="element.children.length" class="children">
      <tree-element v-for="child in element.children" :element="child"></tree-element>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'tree-element',
  props: ['element'],
  computed: {
    name () {
      return this.element.config.name
    }
  }
}
</script>
