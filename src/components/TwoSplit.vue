<template>
  <div class="container">
    <div class="item">
      <slot name="one"></slot>
    </div>
    <div class="item">
      <slot name="two"></slot>
    </div>
  </div>
</template>
<style scoped>
  .container {
    display: block;
    width: 100%;
  }

  .item {
    display: inline-block;
    width: 45%;
    margin: 0 1% 0 4%;
  }
</style>
<script>
export default {
  name:'TwoSplit'
}
</script>