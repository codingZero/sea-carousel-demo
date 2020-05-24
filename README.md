# SeaCarousel

>如果按照文档步骤有问题，或者看不懂，那就看demo的代码吧！！！因为文档我瞎写的

[在线演示地址](https://codingsea.cn/seacarousel)

## Install
```
npm install sea-carousel --save
```

## Import
```
// main.js
import SeaCarousel from "sea-carousel"
import "sea-carousel/lib/sea-carousel.css"
Vue.use(SeaCarousel)
```

## Use
```
<sea-carousel column="3" spacing="15" arrow="always">
    /*** 自定义左右翻页箭头，否则为默认，很丑的哦 ***/
    <span slot="left"><i class="el-icon-arrow-left"></i></span>
    <span slot="right"><i class="el-icon-arrow-right"></i></span>
    /*** 要展示的内容需要用SeaCarouselItem组件包裹 ***/
    <sea-carousel-item v-for="(item, index) in dataList" :key="index">
      // 要展示的内容
    </sea-carousel-item>
</sea-carousel>
```

## SeaCarousel Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------: | :------: | :------: | :------: | :------: |
| column | 列数 | Number | -- | 2 |
| spacing | 列间距 | Number | -- | 16 |
| arrow | 箭头显示方式 | String | always/hover | hover |


## SeaCarousel Methods

| 方法名 | 说明 | 参数 |
| :------: | :------: | :------: |
| resize | 容器宽度改变时调用 | -- | 
| turnPage | 翻页 | -1-上一页，1-下一页 | 

## SeaCarousel Slot

| name | 说明 |
| :------: | :------: |
| default | 只能是SeaCarouselItem |
| left | 上一页 |
| right | 下一页 |


## SeaCarouselItem Slot

| name | 说明 |
| :------: | :------: |
| default | 要展示的内容 |
