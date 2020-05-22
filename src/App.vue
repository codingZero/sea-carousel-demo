<template>
  <div id="app">
    <p style="font-size: 40px; font-weight: bold; margin-top: 0">sea-carousel-demo</p>
    <p class="hint" v-if="showHint">差不多得了啊，那么小干什么，见不得人吗？</p>
    <div class="box" :style="{width}">
      <sea-carousel :column="column" :spacing="spacing" :arrow="arrow" ref="carousel">
        <!--<span slot="left" class="arrow left"><i class="el-icon-arrow-left"></i></span>-->
        <!--<span slot="right" class="arrow right"><i class="el-icon-arrow-right"></i></span>-->
        <sea-carousel-item v-for="(item, index) in list" :key="index" @click.native="click">
          <img class="image" :src="item.img" alt="">
          <p class="label">{{ item.label }}</p>
        </sea-carousel-item>
      </sea-carousel>
    </div>
    <span style="margin-top: 10px; margin-right: 10px; display: inline-block">
      改变列数：
      <el-select v-model="column">
        <el-option :value="1"></el-option>
        <el-option :value="2"></el-option>
        <el-option :value="3"></el-option>
        <el-option :value="4"></el-option>
      </el-select>
    </span>
    <span>
      改变间距：
      <el-select v-model="spacing">
        <el-option :value="0"></el-option>
        <el-option :value="10"></el-option>
        <el-option :value="15"></el-option>
        <el-option :value="20"></el-option>
        <el-option :value="30"></el-option>
      </el-select>
    </span>
    <p>
      改变容器宽度：
      <el-select v-model="width" @change="$refs.carousel.resize()">
        <el-option value="300px"></el-option>
        <el-option value="600px"></el-option>
        <el-option value="900px"></el-option>
        <el-option value="100%"></el-option>
      </el-select>
    </p>
    <p v-if="width === '100%'">改变窗口宽度试试</p>
    <p>
      箭头显示方式：
      <el-select v-model="arrow">
        <el-option value="always"></el-option>
        <el-option value="hover"></el-option>
      </el-select>
    </p>
    <el-button @click="show">显示指示器</el-button>
    <el-button @click="rotation" v-if="showBtn">自动轮播</el-button>
    <p>
      <a href="https://github.com/codingZero/sea-carousel-demo" style="margin-right: 30px" target="_blank">代码地址</a>
      <a href="https://github.com/codingZero/sea-carousel-demo/blob/master/README.md" target="_blank">文档</a>
    </p>
    <a href="https://codingsea.cn" class="home">回到首页</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      width: "600px",
      column: 2,
      spacing: 15,
      arrow: "always",
      showHint: false,
      showBtn: false,
      list: [{
        img: require("./assets/1.jpeg"),
        label: "这是第一张图片"
      }, {
        img: require("./assets/2.jpeg"),
        label: "这是第二张图片"
      }, {
        img: require("./assets/3.jpeg"),
        label: "这是第三张图片"
      }, {
        img: require("./assets/4.jpeg"),
        label: "这是第四张图片"
      }, {
        img: require("./assets/5.jpeg"),
        label: "这是第五张图片"
      }, {
        img: require("./assets/6.jpeg"),
        label: "这是第六张图片"
      }, {
        img: require("./assets/7.jpeg"),
        label: "这是第七张图片"
      }]
    };
  },
  created() {
    window.addEventListener("resize", () => {
      this.$refs.carousel.resize();
      let width = window.document.documentElement.clientWidth || window.document.body.clientWidth
      this.showHint = width < 1000
    })
  },
  methods: {
    show() {
      this.showBtn = true;
      this.$alert('<p style="font-size: 20px; color: red;">要毛指示器，这特么又不是轮播图（还不是因为我懒！)</p>', '呵呵', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '我错了'
      });
    },
    rotation() {
      this.$alert('<p style="font-size: 20px; color: red;">你有毛病吧，都说了不是轮播图</p>', '呵呵', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '我有病'
      });
    },
    click() {
      console.log(111)
    }
  }
}
</script>

<style>
html, body {
  padding-top: 20px;
  margin: 0;
  min-width: 1000px;
  min-height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-ossea-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hint {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  font-size: 30px;
  color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.box {
  margin: 0 auto;
  /*border: 1px solid blue;*/
  height: 300px;
}
.box .arrow {
  width: 60px;
  /*height: 60px;*/
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 20px;
  display: inline-block;
  text-align: center;
  line-height: 60px;
}
.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.label {
  position: absolute;
  bottom: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  left: 0;
  right: 0;
  margin: 0;
  padding: 5px 10px;
}
.home {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
