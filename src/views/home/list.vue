<template>
  <div class="right">
    <li v-for="i in 10" :key="i">
      <div class="item">
        <span>{{article.date}}</span>
        <br>
        <span>
          <a @click="todetail" >{{article.title}}</a>
        </span>
        <br>
        <span class="span-summary">摘要：{{article.summary}}</span>
        <span class="span-readall">
          <a @click="todetail">阅读全文</a>
        </span>
        <br>
        <div class="item-bottom">
          <span>{{article.date}}</span>
          <span>@{{article.author}}</span>
          <span>阅读({{article.readnum}}})</span>
          <span>评论({{article.commentnum}})</span>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        date: "2019年5月14日",
        title: "用django搭建博客系统",
        summary:
          "完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.博客开发完成之后，可以自己用于记录开发中遇到的问题，学习的知识，以及其他的一些分享，和对优质文章的收藏。.....",
        author: "蜗牛",
        readnum: 24,
        commentnum: 12
      }
    };
  },
  methods:{
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
.right {
  padding: 1.25rem;
}
.item {
  padding: 0.25rem;
  min-height: 9.375rem;
  background: rgba(255, 255, 255, 0.753);
  border-radius: 0.625rem;
  box-shadow: 0 0 0.125rem #000 inset;
  font-size: .75rem;
  line-height: 2rem;
  margin-bottom: 1.875rem;
}
.span-summary {
  color: rgb(88, 87, 87);
}
.span-readall {
  margin-left: 1.25rem;
}
.span-readalla {
  color: rgb(117, 117, 207);
}
span {
  margin-right: 0.25rem;
}
.item-bottom {
  color: gray;
  font-size: 0.75rem;
  float: right;
}
</style>
