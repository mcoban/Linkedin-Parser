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
$main-color: rgba(40,62,74,.75);
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  .card__header {
    display: flex;
    padding: .5rem;
    border-bottom: 1px solid #e9e9e9;

    .card__title {
      font-weight: 600;
      color: $main-color;
    }

    .card__status {
      margin-left: auto;
    }
  }

  .card__body {
    padding: .5rem;
  }
}
</style>
