<template>
  <div class="home">
     <nav-bar/>
   <HomePage/>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import HomePage from "./Page/HomePage";


export default {
  name: 'Home',
  components: {
    NavBar,
    HomePage
  }
}
</script>

<style>
 .home{
   height: 1500px;
   width: 100%;
   background-image: linear-gradient(to bottom right, #FFF8DC, white);
 }
</style>