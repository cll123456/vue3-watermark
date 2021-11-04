# 使用方式


`npm install vue3-watermark` or  `yarn add vue3-watermark`

# 效果
![image.png](https://img-blog.csdnimg.cn/img_convert/887bd04d2d2c2b07ba03d7e6db96462c.webp?x-oss-process=image/format,png)

# 指令说明
>本组件本质上是一个vue3的指令，可以使用按需引用，也可以全局注册改指令


## 局部使用
```ts
<script setup lang="ts">
 import { vWaterMark } from 'vue3-watermark';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div
    class="test--container"
    v-water-mark="{ text: '我是水印内容', textColor: 'rgba(0, 0, 0, 0.5)', font: '20px Microsoft JhengHei', row: 100, col: 170 }"
  ></div>
</template>

<style>
.test--container {
  width: 500px;
  height: 400px;
  background-color: rgba(210, 105, 30, 0.63);
}
</style>

```

## 全局注册

`main.js/ts`
```ts
import { createApp } from 'vue'
import App from './App.vue'
import waterMark from 'vue3-waterMark'


const app = createApp(App);
waterMark(app);
app.mount('#app')
```

`使用的组件中`
```ts
<script setup lang="ts">

</script>

<template>
  <div
    class="test--container"
    v-water-mark="{ text: '我是水印内容', textColor: 'rgba(0, 0, 0, 0.5)', font: '20px Microsoft JhengHei', row: 100, col: 170 }"
  ></div>
</template>

<style>
.test--container {
  width: 500px;
  height: 400px;
  background-color: rgba(210, 105, 30, 0.63);
}
</style>
```


# api 参考
|名称  | 作用 |默认值|类型|
|--|--|--|--|
|`text`  | 水印的名称 |无|string|
|`font`  | 水印的字体格式 |"16px Microsoft JhengHei"|string|
|`textColor`  | 水印的字体颜色 |"rgba(180, 180, 180, 0.3)"|string|
|`textColor`  | 水印的字体颜色 |"rgba(180, 180, 180, 0.3)"|string|
|`row`  | 每一行的间距 |100|number|
|`col`  | 每一列的长度 |100|number|