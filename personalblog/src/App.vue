<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import Home from "./views/Home";
  export default {
    name:'app',
    components: {Home}
  }

</script>

<style>
  @import "assets/css/normalize.css";
</style>
