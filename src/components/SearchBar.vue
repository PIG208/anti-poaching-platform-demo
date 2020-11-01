<template>
  <div class=".container">
    <input v-bind:placeholder="placeholder"/>
  </div>
</template>
<style scoped>
  .container {
    display: inline-block;
  }

  input {
    width: 10rem;
  }
</style>
<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder:String
  }
}
</script>