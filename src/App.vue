<template>
  <div>
    <Menu/>
    <div style="width:100%;height:7em;"></div>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components : {
    Menu
  },
}

</script>
