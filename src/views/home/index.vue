<template>
  <div class="home">
    <div class="top">
      <div class="topinfo">
        <span class="nike-name">{{name}}</span>
        <br>
        <span class="single">{{single}}</span>
      </div>
    </div>
    <div class="main" id="main">
      <div class="left" v-if="isNav">
        <nav_left></nav_left>
      </div>
      <div class="content" :style="{width:isNav?'80%':'100%'}">
        <div class="right-top">
          <span>
            <a @click="tolist">首页</a>
          </span>
          <span>
            <a @click="tolist">分类</a>
          </span>
          <span>
            <a @click="tolist">归档</a>
          </span>
          <span>
            <a @click="tolist">联系</a>
          </span>
        </div>
        <!-- <right></right> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "蜗牛",
      single: "一直努力，总有一天会达到顶峰",
      isNav: true,
      url: {
        detail: "detail",
        list: "list"
      }
    };
  },
  components: {
    nav_left: () => import("@/views/home/nav"),
  },
  mounted() {
    const self = this;
    if (document.documentElement.clientWidth > 800) {
      self.isNav = true;
    } else {
      self.isNav = false;
    }
    window.onresize = function temp() {
      if (document.documentElement.clientWidth > 800) {
        self.isNav = true;
      } else {
        self.isNav = false;
      }
    };
  },
  methods: {
    search(content) {
      this.$message("你执行了搜索 " + content + " 的操作");
    },
    tolist(){
      this.$router.push('/')
    },
    todetail(){
      this.$router.push('/article')
    }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.hoem ul,
li {
  list-style: none;
}
.top {
  height: 9.375rem;
  background: url("../../assets/bg.jpg") no-repeat;
  background-size: cover;
}
.topinfo {
  position: absolute;
  width: 100%;
  top: 2.125rem;
}
.nike-name {
  font-size: 1.375rem;
  margin-left: 20%;
}
.single {
  font-size: 0.75rem;
  margin: 20%;
  white-space: nowrap;
}
.main {
  position: absolute;
  top: 9.375rem;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 2px solid rgb(131, 89, 89);
}
.left {
  width: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgb(212, 212, 212);

}

.content {
  width: 80%;
  float: right;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  

}
.right-top {
  background: rgb(255, 255, 233);
  padding: 0.6375rem;
  padding-left: 1.125rem;
}
.right-top span {
  margin-left: 0.4375rem;
}
</style>

