<template>
  <div id="primary">
    <p class="title">{{ $store.state.primaryData.title }}</p>
    <div class="tag">
      <div class="tagItem">
        <div class="HotTag">热门标签</div>
        <div class="HotTagItem">
          <button>#连衣裙</button><button>#连衣裙</button
          ><button>#连衣裙</button><button>#连衣裙</button
          ><button>#连衣裙</button><button>#连衣裙</button>
        </div>
      </div>
      <div class="tagSearch">
        <input
          type="text"
          placeholder="标签搜寻"
          @focus="onfocus"
          @blur="onblur"
          ref="onfocus"
        />
      </div>
    </div>
    <div class="Breadcrumb">
      <div class="ant-breadcrumb">
        <span class="linkSpan">
          <span class="linkNow" @click="goHome">Home</span>
          <span class="slash">/</span>
        </span>
        <span>primary</span>
      </div>
    </div>
    <div class="PrimaryItem">
      <div class="Aslide">
        <div class="mask">
          <p>{{ $store.state.primaryData.title }}</p>
          <span>stride.fun</span>
        </div>
        <div>
          <div class="HotSales">
            <p>热销</p>
          </div>
          <ul class="list-item">
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
            <li>
              <div class="ant-list-item-meta">
                <h4 class="ant-list-item-meta-title">
                  <a href="">安踏男鞋A-SHOCK科技跑鞋</a>
                </h4>
                <div class="ant-list-item-meta-description">666件</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="PrimaryList">
        <div class="today">今日推荐</div>
        <div class="sort">
          <span>共计123件</span>
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[30, 60, 90]"
              :page-size="100"
              layout="sizes"
              class="pagination"
            >
            </el-pagination>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="['默认','价格最高','价格最低','销量最高']"
              :page-size="100"
              layout="sizes"
              class="pagination"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
  created() {
    console.log(111);
  },
  methods: {
    //   路径home按钮
    goHome() {
      console.log("gohome");
    },
    //   拥有焦点时字体变大
    onfocus() {
      this.$refs.onfocus.style.fontSize = 16 + "px";
    },
    // 失去焦点字体恢复
    onblur() {
      this.$refs.onfocus.style.fontSize = 14 + "px";
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  background-color: red;
  font-size: 48px;
  margin: 60px 0 20px;
  text-align: center;
  color: #333333;
  font-family: "ProximaNova-Thin";
  font-weight: 100;
}
.tag {
  display: flex;
  justify-content: space-between;
  padding: 0 38px;
  line-height: 50px;
  height: 100px;
  align-items: center;
  .tagItem {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000;
    font-size: 14px;
    .HotTag {
      width: 20%;
    }
    .HotTagItem {
      width: 70%;
      button {
        margin: 0 10px;
        height: 40px;
        padding: 0 20px;
        font-size: 16px;
        border-radius: 40px;
        border: 1px solid transparent;
        border-color: #d9d9d9;
      }
    }
  }
  .tagSearch {
    width: 14%;
    line-height: 100%;
    // border: 0;
    border-bottom: #000 3px solid;
    input {
      border: 0;
      height: 32px;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      line-height: 1.5;
      background-color: #fff;
      background-image: none;
      transition: all 0.3s;
    }
  }
}
.Breadcrumb {
  width: 58%;
  display: flex;
  align-items: center;
  margin: 20px auto;
  color: #666666;
  font-size: 14px;
  .ant-breadcrumb {
    text-align: left;
    .linkSpan {
      .linkNow {
        cursor: pointer;
      }
      .slash {
        margin: 0 8px;
        color: rgba(14, 19, 15, 41.45);
      }
    }
  }
}
.PrimaryItem {
  padding: 0 38px;
  display: flex;
  justify-content: space-between;
  height: 1000px;
  .Aslide {
    width: 16%;
    border: 1px solid #000;
    .mask {
      height: 155px;
      padding: 30px 0 0 30px;
      background-color: #5a5a5a;
      font-size: 30px;
      font-family: "ProximaNova-Thin";
      color: #fff;
      letter-spacing: -1px;
      line-height: 26px;
      font-weight: 100;
      span {
        display: block;
        margin-top: 25px;
        font-size: 24px;
        opacity: 0.7;
      }
    }
    .HotSales {
      height: 53px;
      background-color: #f2f2f2;
      font-family: "yg740";
      font-size: 18px;
      color: #333;
      padding: 16px 0 16px 30px;
    }
    .list-item {
      outline: none;
      li {
        padding: 20px 30px 0 30px;
        border-bottom: 1px solid #e8e8e8;
        .ant-list-item-meta {
          display: flex;
          flex: 1;
          align-items: flex-start;
          h4 {
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            line-height: 22px;
            :hover {
              color: #1890ff;
            }
            a {
              color: #000000;
              text-decoration: none;
              transition: all 0.3s;
              font-size: 12px;
              font-weight: 200;
            }
          }
          .ant-list-item-meta-description {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
    }
  }
  .PrimaryList {
    width: 80%;
    border: 1px solid #000;
    .today {
      padding: 0 15px;
      font-weight: 700;
      font-size: 16px;
      color: #000;
      width: 100%;
      height: 54px;
      line-height: 3;
      border-top: 1px solid #e1e1e1;
      border-bottom: 2px solid #000;
      background-color: #fbfbfb;
      //   display: flex;
      //   justify-content: flex-end;
    }
    .sort {
      position: relative;
      margin: 25px 0 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        justify-content: space-between;
        .pagination {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          font-variant: tabular-nums;
          line-height: 1.5;
          list-style: none;
          font-feature-settings: "tnum";
          position: relative;
          display: inline-block;
          outline: 0;
        }
      }
    }
  }
}
</style>