<template>
  <div>
    <TwoSplit>
      <template v-slot:one>
        <div class="brief">
          <h1>「平台名字」</h1>
          <h2>中国第一个实时大数据盗猎平台</h2>
        </div>
      </template>
      <template v-slot:two><img src="../assets/gif/giphy.gif" /></template>
    </TwoSplit>
  </div>
</template>
<style scoped>
  .brief > h1{
    font-size: 5rem;
  }
  .brief > h2{
    font-size: 2rem;
  }
</style>
<script>
import TwoSplit from '../components/TwoSplit'
export default {
  name: 'Home',
  components: {
    TwoSplit
  }
}
</script>
