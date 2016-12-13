<template>
  <li :class="['blueprint-group', 'blueprint-group-' + group.name]">
    <h3>{{ group.label }}</h3>
    <ul v-if="group.blueprints.length" class="blueprints">
      <blueprint v-for="blueprint in group.blueprints" :blueprint="blueprint"></blueprint>
    </ul>
  </li>
</template>

<script>
import blueprint from './blueprint.vue'

export default {
  props: ['group'],
  components: {
    blueprint
  }
}
</script>
