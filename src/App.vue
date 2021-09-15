<template>
  <div id="app">
    <!-- 头部 -->
    <header>
      <my-top />
    </header>
    <!-- 内容 -->
    <section class="router_box">
      <router-view></router-view>
    </section>
    <!-- 底部 -->
    <footer>
      <my-footer />
    </footer>
  </div>
</template>

<script>
import myTop from "@/components/mytop";
import myFooter from "@/components/myfooter";
export default {
  name: "App",
  components: {
    myTop,
    myFooter,
  },
};
</script>

<style lang="less" >

</style>
