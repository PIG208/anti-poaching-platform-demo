<template>
  <footer>
    <FontIcon icon="fa-copyright" /> <i>BlueYouth.</i> All Rights Reserved.
  </footer>
</template>
<style>
  footer {
    height: calc(var(--footer-height) - 0.5px);
    color: #cccccc;
    text-align: right;
    font-size: 0.5rem;
    border-top:0.5px solid #cccccc;
  }
</style>
<script>
import FontIcon from './FontIcon'
export default {
  name: "Footer",
  components: {
    FontIcon
  }
}
</script>