import { App, DirectiveBinding } from "vue";

/**
 * 添加水印
 * @param str 
 * @param parentNode 
 * @param font 
 * @param textColor 
 */


function addWaterMarker(str: string, parentNode: HTMLDivElement, font: string, textColor: string, rowLength: number, colLength: number) {// 水印文字，父元素，字体，文字颜色
  rowLength = rowLength || 100;
  colLength = colLength || 100
  let can = document.createElement('canvas');
  parentNode.appendChild(can);
  can.width = parentNode.offsetWidth;
  can.height = parentNode.offsetHeight;
  can.style.display = 'none';
  let cans = can.getContext('2d');
  cans?.rotate(-10 * Math.PI / 180);
  cans!.font = font || "16px Microsoft JhengHei";
  cans!.fillStyle = textColor || "rgba(180, 180, 180, 0.3)";
  cans!.textAlign = 'left';
  cans!.textBaseline = 'middle';
  // 需要遍历添加文字
  for (let row = 0; row < can.height / rowLength; row++) {
    for (let col = 0; col < can.width / colLength; col++) {
      cans?.fillText(str, col * colLength, row * rowLength);
    }
  }

  parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
}


/**
* v-waterMarker操作权限处理
* // 注册
app.directive('my-directive', {
 // 指令是具有一组生命周期的钩子：
 // 在绑定元素的 attribute 或事件监听器被应用之前调用
 created() {},
 // 在绑定元素的父组件挂载之前调用
 beforeMount() {},
 // 绑定元素的父组件被挂载时调用
 mounted() {},
 // 在包含组件的 VNode 更新之前调用
 beforeUpdate() {},
 // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
 updated() {},
 // 在绑定元素的父组件卸载之前调用
 beforeUnmount() {},
 // 卸载绑定元素的父组件时调用
 unmounted() {}
})
* 
*/

const vWaterMark = {
  mounted(el: HTMLDivElement, binding: DirectiveBinding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor, binding.value.row, binding.value.col)
  }
}

/**
 * 局部注册指令
 */
export { vWaterMark };

/**
 * 全局注册
 * @param app 
 */
export default function (app: App<Element>) {
  app.directive('waterMark', vWaterMark);
}