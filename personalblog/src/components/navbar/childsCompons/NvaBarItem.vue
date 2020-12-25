<template>
  <div class="nav-bar-item">
    <!--    <div v-for="(item,index) in navBarItem" :key="index">-->
    <!--      <div :class="{active:index==itemIndex}" @click="activeIndex(index,$event)">-->
    <!--        {{item.column}}-->
    <!--        <img src="~assets/images/up.png" alt="" class="image"-->
    <!--             v-if="item.childColumn && item.childColumn.length!==0"/>-->
    <!--      </div>-->
    <!--      <div v-show="isShowItem">-->
    <!--        <div  v-for="childItem in item.childColumn"-->
    <!--             class="navbarChild">-->
    <!--          {{childItem.childName}}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <ul class="nav nav-tabs nav-bar-item">

      <li role="presentation" class="dropdown" v-for="(item,index) in navBarItem"
          :key="index"
          @click="activeIndex(index)">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
           aria-expanded="false" :class="{active:itemIndex==index}">
          {{item.column}}
          <span class="caret" v-if="item.childColumn&&item.childColumn.length"></span>
        </a>
        <ul class="dropdown-menu child-item" v-if="item.childColumn&&item.childColumn.length">
          <li v-for="(childItem,index) in item.childColumn" :key="index" class="">{{childItem}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NvaBarItem",
    data() {
      return {
        itemIndex: 0
      }
    },
    props: {
      navBarItem: {
        type: Array,
        default: []
      }
    },
    methods: {
      activeIndex(index, event) {
        this.isShowItem = false
        this.itemIndex = index
      }
    }
  }
</script>

<style scoped>
  .nav-bar-item {
    display: flex;
    align-items: center;
    font-size: 18px;
    width: 100%;
    height: 100%;
  }

  .nav-bar-item li {
    flex: 1;
    justify-content: space-around;
    flex-wrap: nowrap;

    height: 50px;
    line-height: 50px;

    text-align: center;
  }

  .child-item {
    width: 100% !important;
  }

  .child-item li:hover {
    background: cyan;
    cursor: pointer;
  }

  .active {
    background: #eee;
  }
</style>