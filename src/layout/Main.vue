<template>
  <div>
    <Header />
    <transition name="fade">
      <div class="main">
        <div class="container">
          <slot></slot>
        </div>
        <Footer />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  min-height: calc(100vh - var(--main-padding) * 2 - var(--header-vert-padding) * 2 - var(--header-height) - var(--footer-height));
}

.main {
    position: absolute;
    padding: var(--main-padding);
    width: calc(100% - var(--main-padding) * 2);
    top: calc(var(--header-vert-padding) * 2 + var(--header-height));
}

.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Main',
  data: function () {
    return {
      showHeader: false
    }
  },
  components: {
    Header, Footer
  }
}
</script>
