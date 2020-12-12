<template>
  <div>Hello World</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const vm = getCurrentInstance()
    console.log(vm)
    return {}
  }
})
</script>
