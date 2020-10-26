<template>
  <button class="pluto-button pluto-button--success">
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'PButton',
    props: {
      theme: {
        type: String,
        default: 'default'
      }
    }
  })
</script>

<style lang="scss">

</style>
