<template>
  <div id="mytop">
    <div class="hd">
      <section class="core">
        <img src="@/assets/imgs/logo.png" alt="" />
        <div class="search_box">
          <input type="text" />
        </div>
        <div class="user_operation">
          <a href="">加入</a>
          <a href="">登录</a>
          <a href="">购物车</a>
        </div>
      </section>
    </div>
    <div class="bd">
      <section class="nav_box">
        <nav class="lf">
          <!-- 一级标题 -->
          <a
            href="javaScript:;"
            v-for="(item, index) in oneeLevelData"
            :key="index"
            @mouseenter="ontwoLevel(item)"
            @mouseout="onmouseout"
          >
            {{ item }}
          </a>
        </nav>
        <nav class="rt">
          <router-link to="">POP</router-link>
          <router-link to="">EXCLUSIVE</router-link>
          <router-link to="">EVENT</router-link>
          <router-link to="">BEST</router-link>
        </nav>
      </section>
    </div>
    <!-- 二级标题 -->
    <div
      class="drop_down_box"
      v-show="isShow"
      @mouseout="onmouseout"
      @mouseenter="onmouseenter"
    >
      <a
        href="javaSrcipt:;"
        v-for="(item, index) in twoeLevelData"
        :key="index"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
import oneLevel from "@/api/oneLevel.js";
import twoLevel from "@/api/twoLevel.js";

export default {
  name: "Mytop",
  data() {
    return {
      oneeLevelData: [], //一级标题
      twoeLevelData: [], //二级标题
      isShow: false, //是否显示二级标题
    };
  },
  created() {
    // 获取一级标题
    this.oneLevelData();
  },
  methods: {
    // 获取一级标题
    oneLevelData() {
      oneLevel().then((r) => {
        this.oneeLevelData = r.data;
      });
    },
    // 鼠标进入获取二级标题，二级标题显示
    ontwoLevel(item) {
      this.onmouseenter();
      twoLevel(item).then((r) => {
        this.twoeLevelData = r.data;
      });
    },
    // 鼠标离开二级标题隐藏
    onmouseout() {
      this.isShow = false;
    },
    // 鼠标进入显示二级标题
    onmouseenter() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" >
#mytop {
  position: relative;
  .hd {
    height: 70px;
    & > .core {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .search_box {
        width: 315px;
        height: 100%;
        display: flex;
        align-items: center;
        input {
          height: 32px;
          width: 100%;
          border: none;
          border-bottom: 2px solid #000;
        }
      }
      .user_operation {
        width: 210px;
        height: 100%;
        display: flex;
        a {
          flex: 1;
          text-align: center;
          font-size: 12px;
          color: #000;
          border: 1px solid #000;
        }
      }
    }
  }
  .bd {
    height: 70px;
    background: #000;
    .nav_box {
      width: 750px;
      height: 100%;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      nav {
        flex: 1;
        display: flex;
        a {
          flex: 1;
          color: #fff;
          font-size: 14px;
          line-height: 70px;
          text-align: center;
          &:hover {
            color: green;
          }
        }
      }
      .lf {
        margin-right: 20px;
      }
      .rt {
        margin-left: 20px;
        a {
          font-weight: bold;
        }
      }
    }
  }
  .drop_down_box {
    position: absolute;
    height: 300px;
    width: 100%;
    background: #fff;
    border: 1px solid #000;
    a {
      margin: 0 10px;
      border: 1px solid #000;
      background: #fff;
    }
  }
}
</style>
