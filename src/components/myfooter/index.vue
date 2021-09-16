<template>
  <div id="myfooter">
    <div class="hd">
      <nav>
        <router-link to="/about">关于我们</router-link>
        <router-link to="">咨询服务</router-link>
        <router-link to="/partner">合租伙伴查询</router-link>
        <router-link to="/terms">服务条款</router-link>
        <router-link to="">隐藏政策</router-link>
        <router-link to="/serviceCenter">服务中心</router-link>
        <router-link to="">招聘信息</router-link>
        <router-link to="/global">全球的</router-link>
      </nav>
    </div>
    <div class="bd">
      <section class="box">
        <div class="lf">
          <p>网站名称</p>
          <p>
            © 2009-2021 Stride.fun 版权所有 ICP主体备案号： 苏ICP备2021007111号
          </p>
          <p>
            <a href="">网站备案信息</a>
          </p>
          <p>
            <a href="">
              <img src="@/assets/imgs/gn.png" alt="" />
              苏公网安备 32011402010859号
            </a>
          </p>
        </div>
        <div class="rt">
          <p>消费者损害赔偿保险</p>
          <p>
            客户在以现金支付安全交易时可以使用Wconcept订阅的
            <a href=""> 消费者损害赔偿保险服务。 </a>
          </p>
          <p>赔偿对象：不送/退货，拒绝退款/商场破产</p>
          <p>
            <a href="">检查服务订阅事实</a>
          </p>
        </div>
      </section>
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
      display: flex;
      width: 1080px;
      height: 145px;
      margin: 0 auto;
      padding: 20px 10px;
      font-size: 14px;
      color: #666;
      line-height: 25px;
      a {
        color: #666;
      }
      .lf {
        flex: 1;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          right: 25px;
          top: 50%;
          transform: translateY(-50%);
          height: 80%;
          width: 1px;
          background: #999;
          
        }
        img {
          vertical-align: middle;
        }
      }
      .rt {
        flex: 1;
      }
    }
  }
}
</style>
