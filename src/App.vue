<template>
  <nav-menu></nav-menu>
  <router-view></router-view>
</template>

<script>
import NavMenu from './components/Menu.vue'

export default {

  components: {
    'nav-menu': NavMenu,
  }

}
</script>
