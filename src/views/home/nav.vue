<template>
  <div class="nav">
    <div class="userinfo">
      <span>昵称：</span>
      <a href="#">{{name}}</a>
      <br>
      <span>博龄：</span>
      <a href="#">{{blog_age}}</a>
      <br>
      <span>访问：</span>
      <a href="#">{{blog_visit}}</a>
      <br>
      <span>点赞：</span>
      <a href="#">{{blog_star}}</a>
      <br>
      <div class="date">
        <calendar></calendar>
      </div>
      <hr>
      <span>站内搜索</span>
      <br>
      <el-input v-model="search_content" placeholder="请输入搜索内容" class="search_input">
        <el-button slot="append" icon="el-icon-search" @click="search(search_content)"></el-button>
      </el-input>
      <hr>
      <span>博客分类({{blog_count}})</span>
      <br>
      <div class="blog_type">
        <li v-for="type in blog_type" :key="type">
          <a @click="tolist">{{type}}</a>
        </li>
      </div>
      <span>博客归档</span>
      <br>
      <div class="blog_file">
        <li v-for="file in blog_file" :key="file">
          <a @click="tolist">{{file}}</a>
        </li>
      </div>
      <span>阅读排行榜</span>
      <br>
      <div class="blog_read_list">
        <li v-for="i in 10" :key="i">
          <a @click="todetail">{{i}}. django-vue从零开始搭建一套完整的博客系统 {{i}}</a>
        </li>
      </div>

      <span>最近评论</span>
    </div>
  </div>
</template>
<script>
import nav_left from '@/views/home/nav'
export default {
  data() {
    return {
      name: "蜗牛",
      single: "一直努力，总有一天会达到顶峰",
      blog_age: "1年3个月",
      blog_visit: "24821",
      blog_star: "245",
      
      search_content: "",
      blog_count: 243,
      blog_type: ["python", "java", "c#", "c++", "bootstrap"],
      blog_file: [
        "2018年10月",
        "2019年2月",
        "2019年3月",
        "2019年4月",
        "2019年5月"
      ]
    };
  },
  components: {
    calendar: () => import("vue-calendar-component"),
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
.nav{
  border-right: 2px solid rgb(131, 89, 89);
}
.userinfo {
  /* height: 12.5rem; */
  padding: 0.875rem;
  font-size: 0.75rem;
  background: rgb(245, 245, 245);
}
.date {
  margin-top: 1.875rem;
  margin-bottom: 3.125rem;
}
.wh_container >>> .wh_content_all {
  background: rgb(235, 232, 232);
  min-width: 8.125rem;
  height: 12.5rem;
}
.wh_container >>> .wh_content_item,
.wh_top_tag {
  color: rgb(43, 119, 206);
}
.wh_container >>> .wh_content_item .wh_other_dayhide,
.wh_content_item .wh_want_dayhide {
  color: rgb(100, 96, 96);
}
.wh_container >>> .wh_top_changge .wh_content_li {
  color: rgb(119, 92, 43);
}
.wh_container >>> .wh_content_item .wh_isToday {
  background: rgb(111, 158, 202);
}
.wh_container >>> .wh_content_item .wh_chose_day {
  background: rgb(175, 206, 36);
}

.search_input {
  margin-bottom: 1.875rem;
}

.blog_type,
.blog_file,
.blog_read_list {
  margin-left: 1.5rem;
  color: blue;
  margin-bottom: 1.875rem;
}

</style>
