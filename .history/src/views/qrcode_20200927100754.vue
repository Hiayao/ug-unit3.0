<template>
  <div class="All">
    <!-- 1:npm安装 npm install qrcanvas -->
    <!-- 2. 在用的页面引入import { qrcanvas } from 'qrcanvas'; -->
    <div class="flex ac">
      <input
        type="text"
        class="input"
        placeholder="请输入文字或网址"
        ref="textarea"
      />
      <a-button type="primary" style="margin-left: 20px" @click="handleCode">
        生成二维码
      </a-button>
    </div>
    <!-- <h3>不设置宽高</h3> -->
    <ug-qrcode :value="value"></ug-qrcode>
    <!-- <h3>设置宽高</h3>
    <ug-qrcode :value="value" :size="200"></ug-qrcode> -->
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  nextTick,
  ref,
} from "vue";
import ugQrcode from "../components/ug-qrcode.vue";
import { qrcanvas } from "qrcanvas";
interface Data {
  value: string;
  size: number;
  cellSize: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugQrcode,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
      size: 100,
      cellSize: 4,
    });
    const textarea = ref<HTMLInputElement | null>(null);
    const handleCode = (): void => {
      // nextTick(() => {
      //   var canvas = qrcanvas({
      //     data: data.value, //二维码内容
      //     size: data.size, //二维码大小
      //   });
      //   document.getElementById("qrcode")!.innerHTML = "";
      //   document.getElementById("qrcode")!.appendChild(canvas);
      // });
      console.log(textarea);
      data.value = textarea.value!.value;
    };
    return {
      ...toRefs(data),
      handleCode,
      textarea,
    };
  },
});
</script>

<style scoped lang='scss'>
.All {
  width: 1030px;
  height: 600px;
  margin: 24px 0 0 20px;
  background: #fff;
  padding: 20px;
}
.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  width: 600px;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>