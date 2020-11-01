<template>
  <nav>
    <div>
      <a><FontIcon icon="fa-cube" />「平台名字」</a>
      <ul id="nav-links">
          <li v-for="item in headers" :key="item.title">
            <transition name="fade-down"><div v-show="item.over"><div class="tag">{{item.title}}</div></div></transition>
            <router-link v-bind:to="item.target" @mouseover.native="item.over = true" @mouseleave.native="item.over = false"><FontIcon v-bind:icon="item.icon"/>&nbsp;</router-link>
          </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
    position: fixed;
    width: 100%;
    height: var(--header-height);
    font-size: var(--header-font-size);
    line-height: var(--header-font-size);
    top: 0;
    padding: var(--header-vert-padding) 0 var(--header-vert-padding) 0;
}

nav > div {
    margin: 0 1rem 0 1rem;
}

#nav-links {
    display: inline-block;
    position: absolute;
    right: 8rem;
    margin: 0;
}

#nav-links > li {
    display: inline-block;
    margin: 0 1rem 0 1rem;
}

.fade-down-enter-active{
  transition: all 0.5s ease;
}

.fade-down-leave-active{
  transition: all 0.3s ease;
}

.fade-down-enter, .fade-down-leave-to{
  transform: translateY(0.5rem);
  opacity: 0;
}

a {
  text-decoration: none;
  color: black;
}

.tag {
  --tag-height: 2rem;
  position: absolute;
  top: calc(var(--header-height) + var(--tag-height));
  padding: 0.5rem 1rem 0.5rem 1rem;
  min-width: 2rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1rem;
  background-color: white;
  border: 1px solid black;
  transform: translateX(calc(-50% + 1rem));
  --arrow-offset: -0.75rem;
}

.tag::before {
  content: "";
  position: absolute;
  top: calc(var(--arrow-offset) - 1px);
  left: calc(50% + var(--arrow-offset) / 2);
  border-left: calc(var(--arrow-offset) / -2) solid transparent;
  border-right: calc(var(--arrow-offset) / -2) solid transparent;
  border-bottom: calc(var(--arrow-offset) * -1) solid black;
}
.tag::after {
  content: "";
  position: absolute;
  top: calc(var(--arrow-offset) + 1px);
  left: calc(50% + var(--arrow-offset) / 2);
  border-left: calc(var(--arrow-offset) / -2) solid transparent;
  border-right: calc(var(--arrow-offset) / -2) solid transparent;
  border-bottom: calc(var(--arrow-offset) * -1) solid white;
}
</style>

<script>
import FontIcon from './FontIcon'
export default {
  name: 'Header',
  data: function () {
    return {
      counter: 1,
      headers: [
        {
          title: '数据',
          target: 'home',
          icon: 'fa-pie-chart',
          over: false
        },
        {
          title: '背景',
          target: 'error',
          icon: 'fa-file-text',
          over: false
        },
        {
          title: '检索',
          target: 'search',
          icon: 'fa-search',
          over: false
        },
        {
          title: '个人',
          target: 'info',
          icon: 'fa-user',
          over: false
        }
      ]
    }
  },
  components: {
    FontIcon
  },
  methods: {
    showTag (title, event) {
      event.target
    }
  }
}
</script>
