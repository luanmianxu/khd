<template>
  <div id="myfooter">
    <div class="hd">
      <nav>
        <router-link to="">关于我们</router-link>
        <router-link to="">咨询服务</router-link>
        <router-link to="">合租伙伴查询</router-link>
        <router-link to="">服务条款</router-link>
        <router-link to="">隐藏政策</router-link>
        <router-link to="">服务中心</router-link>
        <router-link to="">招聘信息</router-link>
        <router-link to="">全球的</router-link>
      </nav>
    </div>
    <div class="bd">
      <section class="box"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myfooter",
};
</script>

<style lang="less">
#myfooter {
  height: 205px;
  margin-bottom: 40px;
  .hd {
    height: 60px;
    background: rgba(0, 0, 0, 0.5);
    nav {
      width: 1080px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        font-size: 15px;
        line-height: 60px;
      }
    }
  }
  .bd {
    height: 145px;
    .box {
      width: 1080px;
      height: 145px;
      margin: 0 auto;
      border: 1px solid #000;
    }
  }
}
</style>
