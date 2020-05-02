<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  border: 1px solid #e9e9e9;
}
</style>
