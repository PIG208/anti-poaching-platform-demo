<template>
  <i :class="[fa, icon]"></i>
</template>
<script>
export default {
  name: 'FontIcon',
  data: function () {
    return {
      fa: 'fa'
    }
  },
  props: {'icon': String}
}
</script>