<template>
  <div class="dat-remember">
    <div class="text">
      每日一记
    </div>
    <div v-for="(item,index) in articleList">
      <div class="article">{{item.text}}</div>
      <div>
        <span class="technicalPoint" v-for="de in item.technicalPoint">{{de}}</span>
        <div v-if="index!=articleList.length-1" class="bottom-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {backgroundColor} from "../utils/color";

  export default {
    name: "DayToRemember",
    data() {
      return {
        articleList: [{
          text: '   进程是指一个内存中运行的应用程序，每个进程都有自己独立的一块内存空间，即进程空间或（虚空间）。进程不依赖于线程而独立存在，一个进程中可以启动多个线程。比如在Windows系统中，一个运行的exe就是一个进程。\n' +
              '\n' +
              ' 线程是指进程中的一个执行流程，一个进程中可以运行多个线程。比如java.exe进程中可以运行很多线程。线程总是属于某个进程，线程没有自己的虚拟地址空间，与进程内的其他线程一起共享分配给该进程的所有资源。\n' +
              '“同时”执行是人的感觉，在线程之间实际上轮换执行。\n' +
              '进程在执行过程中拥有独立的内存单元，进程有独立的地址空间，而多个线程共享内存，从而极大地提高了程序的运行效率。\n' +
              '线程在执行过程中与进程，进程是系统进行资源分配和调度的一个独立单位。\n' +
              '线程是进程的一个实体，是CPU调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。线程自己基本上不拥有系统资源，只拥有一点在运行中必不可少的资源（如程序计数器,一组寄存器和栈），但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。'
          , technicalPoint: ['java', '线程','vue','css','html','python','javascript','java', '线程','vue','css','html']
        }, {
          text: '   进程是指一个内存中运行的应用程序，每个进程都有自己独立的一块内存空间，即进程空间或（虚空间）。进程不依赖于线程而独立存在，一个进程中可以启动多个线程。比如在Windows系统中，一个运行的exe就是一个进程。\n' +
              '\n' +
              ' 线程是指进程中的一个执行流程，一个进程中可以运行多个线程。比如java.exe进程中可以运行很多线程。线程总是属于某个进程，线程没有自己的虚拟地址空间，与进程内的其他线程一起共享分配给该进程的所有资源。\n' +
              '“同时”执行是人的感觉，在线程之间实际上轮换执行。\n' +
              '进程在执行过程中拥有独立的内存单元，进程有独立的地址空间，而多个线程共享内存，从而极大地提高了程序的运行效率。\n' +
              '线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。\n' +
              '进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动，进程是系统进行资源分配和调度的一个独立单位。\n' +
              '线程是进程的一个实体，是CPU调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。线程自己基本上不拥有系统资源，只拥有一点在运行中必不可少的资源（如程序计数器,一组寄存器和栈），但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。'
          , technicalPoint: ['java', '线程','vue','css','html']
        }]
      }
    },
    mounted() {
       let technicalPoint=document.getElementsByClassName('technicalPoint')
       for (let item of technicalPoint){
           item.style.background=backgroundColor()
       }
    }
  }
</script>

<style scoped>
  .dat-remember {
    margin-top: 10px;
    border-top: 3px transparent solid;
    border-image: linear-gradient(to right, #000718, #23b7cb) 1 10;

    height: 500px;
    overflow-y: scroll;
  }

  .text {
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    color: #23b7cb;
    font-size: 18px;
    /*padding:5px 15px;*/
    border: 1px transparent solid;
    border-image: linear-gradient(to right, #000718, #23b7cb) 1 10;
  }
  .article{
    font-size: 16px;
    font-family: '华文正楷';
  }
  .technicalPoint {
    margin-left: 20px;
    margin-top: 5px;
    width: 100px;
    height: 35px;
    line-height: 35px;
    display: inline-block;
    text-align: center;
    border: 1px solid white;
    color: #FFF;
  }

  .bottom-border {
    border-bottom: 3px transparent solid;
    border-image: linear-gradient(to right, #000718, #23b7cb) 1 10;
    padding-top: 15px;
  }
</style>