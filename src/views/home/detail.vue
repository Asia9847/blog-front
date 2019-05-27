<template>
  <div class="detail">
    <div class="article">
      <span>{{article.date}}</span>
      <br>
      <span>
        <a href="#">{{article.title}}</a>
      </span>
      <br>
      <p>{{article.context}}</p>

      <br>
      <div class="article-bottom">
        <span>
          <span>{{article.date}}</span>
          <span>@{{article.author}}</span>
          <span>
            <a href="#">点赞</a>
          </span>
          <span>
            <a href="#">评论</a>
          </span>
        </span>
      </div>
    </div>
    <span>评论</span>
    <br>
    <li v-for="i in 10" :key="i">
      <div class="comment">
        <span>#{{i}}楼</span>
        {{comment.date}}
        <span>@{{comment.name}}</span>
        <br>
        <span class="comment-context">{{comment.context}}</span>
        <br>
        <span>
          <a href="#">回复</a>
        </span>
        <span>
          <a href="#">引用</a>
        </span>
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
        title: "电影赏析：《加勒比海盗》信仰自由",
        summary:
          "完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.完成一个网站从0到1完整的过程，锻炼自己的技术，从头到为做一个完整的项目.博客开发完成之后，可以自己用于记录开发中遇到的问题，学习的知识，以及其他的一些分享，和对优质文章的收藏。.....",
        context:
          "  他不是英雄，因为他遇到危险就会落荒而逃。他要的不只是统治一艘船，而是整个海洋。他被出卖，被扔到孤岛，他躺在沙滩上跟酒神跳舞，对饮，一醉方休。他绝处逢生，顶着一张破帆走出荒岛。他步步为营，凭着一枪一帽一罗盘一瓶酒，和精明的头脑赢回他失去的东西。他的血液里流着疯狂的血液。 这种不羁是他海盗血液里流淌的，掠夺金钱徜徉海洋也是。海洋，这个更广阔的区域让人向往，更激起海盗的无限野心和斗志，神秘莫测的海洋里有很多故事，风浪会随时袭击。这样危险又神奇的地方，随时会和自然、和船只、和人展开搏斗，更是海域里的未知，让海盗们为之疯狂，即使是半死的海盗，也没有罢手。 伟大的杰克·斯派罗船长，轻松地只迈了一小步，就和只有桅杆尖还露在水面的沉船挥别了。而他在这惊险的过程中不但时间掌握得恰到好处，而且最关键的是他的态度，沉着得好像不是从将吻海底的小船上逃得性命，而是在铺满鲜花的绿茵中漫步。他的脸上总是带着微笑,就算他没有笑,别人也会觉得他在笑。\n \n 都说，平淡或许是生活赐予我们最大的幸福。谁能预料到，爱情里将会出现如何刺激的遭遇和险峻考验。自己遇到这样的奇异的状况，是否会一如电影里的TA一样拼死勇敢，只为了拯救对方不使其陷入险恶之中。太难猜了吧，也不想知道确切的答案，提起来大概只会让人笑笑说这是小女孩一厢情愿又孩子气的怪幻想而已。 \n \n也许四部《加勒比海盗》中最具智慧的人应该就是蒂格船长吧，作为法典的保管人，他似乎充当着黑暗保镖的角色，一个内敛而且能力非凡的管家，拥有者震慑人心的气场与明悟生命的大智慧，杰克如此聪明算是有点遗传吧，不过对于明悟大智慧，此时的杰克似乎还太年轻，磨砺灵魂的东西似乎经历的还是太少。为了金钱，为了名誉，为了欲望，他们背叛人性，出卖灵魂，而当他们真正得到想要的时候，却发现自己真正失去了自己，对这个美好世界上的任何事物都没有了感觉，多么可悲的事情。人最大的悲哀在于不知道自己要什么，而且不知如何取舍。作为一个海盗他是倒霉的，两度落入荒岛，同时他又是幸运的，作为风云人物，被人陷害是难免的，两次都死里逃生，尽管逃走的方式有些让人失望，但不妨碍他在我心中是个充满传奇色彩的人物。我只能从水手的只言片语中了解他的过去，杰克的心思没有谁能看穿。快到世界尽头时出现的瀑布，让我想起村上春树所描绘的世界尽头，或许主创灵感来自于村上？许多杰克在世界尽头的轮船上，除了轮船，四周都是虚无。不懂那么多杰克出现在船上的含义。难道那就是一种折磨？从世界尽头归来的途中，他们看到幻象，有自己的亲人朋友。那或许是冥河。",
        author: "静静看着你",
        readnum: 24,
        commentnum: 12
      },
      comment: {
        floot: 1,
        date: "2019年5月15日",
        name: "小绵羊",
        context:
          "最喜欢这一句：许多杰克在世界尽头的轮船上，除了轮船，四周都是虚无。不懂那么多杰克出现在船上的含义。难道那就是一种折磨？从世界尽头归来的途中，他们看到幻象，有自己的亲人朋友。那或许是冥河。"
      }
    };
  }
};
</script>
<style scoped>
.right {
  padding: 1.25rem;
}
.article {
  padding: 0.5rem;
  min-height: 9.375rem;
  background: rgba(255, 255, 255, 0.753);
  border-radius: 0.625rem;
  box-shadow: 0 0 0.125rem #000 inset;
  font-size: 0.75rem;
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
.article-bottom {
  color: gray;
  font-size: 0.75rem;
  margin-left: auto;
  text-align: right;
}
.comment {
  padding: 0.5rem;
  min-height: 6.375rem;
  background: rgba(255, 255, 255, 0.753);
  border-radius: 0.625rem;
  box-shadow: 0 0 0.125rem #000 inset;
  font-size: 0.75rem;
  line-height: 1.5rem;
  margin-bottom: 1.875rem;
}
.comment span {
  margin: 0.3125rem;
  color: rgb(41, 98, 202);
}
.comment .comment-context {
  color: rgb(32, 36, 35);
}
</style>
