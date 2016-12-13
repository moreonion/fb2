<template>
  <li :class="['blueprint', 'blueprint-' + blueprint.name]">
    <h4>{{ blueprint.label }}</h4>
  </li>
</template>

<script>
export default {
  props: ['blueprint']
}
</script>
