import {vWaterMark} from '@/index';


import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    
    return () =>
      h(
        'div',
        {
          id: "app",
          'v-waterMark':{ text: '我是水印内容', textColor: 'rgba(0, 0, 0, 0.5)', font: '20px Microsoft JhengHei', row: 100, col: 170 }
        },
       '测试水印'
      );
  },
});
