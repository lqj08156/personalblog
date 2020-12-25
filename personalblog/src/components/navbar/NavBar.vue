<template>
  <div class="nav-bar">
    <NvaBarItem :nav-bar-item="navBarItemLIst"/>
  </div>
</template>

<script>
  import NvaBarItem from "./childsCompons/NvaBarItem";

  export default {
    name: "NavBar",
    data() {
      return {
        navBarItemLIst: [{
          column:'技术论坛'
        },{
          column:'技术论坛'
        },{

          column:'技术论坛'
        },{
          column:'技术论坛',
          childColumn:[1,2,3]
        },{
         column:'技术论坛',
          childColumn:[{
            childName:'java'},{
            childName:'java'},{
            childName:'java'},{
            childName:'java'}]
        }]
      }
    },
    components: {
      NvaBarItem
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: relative;
    position: fixed;
    width: 100%;
    height: 50px;
    /*background: #333;*/
  }
</style>