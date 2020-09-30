<template>
  <div class="flex ac" v-if="props.size!==100">
    <input
      type="text"
      class="input"
      placeholder="请输入文字或网址"
      ref="textarea"
      v-model="value"
    />
    <a-button type="primary" style="margin-left: 20px" @click="handleCode">
      生成二维码
    </a-button>
  </div>
  <div id="qrcode" v-if="props.size!==100"></div>
	<div id="qrcode" v-else></div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  nextTick,
  ref,
} from "vue";
import { qrcanvas } from "qrcanvas";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {
    size: {
      type: Number,
      default: 100,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    const textarea = ref<HTMLInputElement | null>(null);
    const handleCode = (): void => {
      nextTick(() => {
        var canvas = qrcanvas({
          data: data.value, //二维码内容
          size: props.size, //二维码大小
        });
        document.getElementById("qrcode")!.innerHTML = "";
        document.getElementById("qrcode")!.appendChild(canvas);
      });
    };
    onMounted(() => {});
    return {
      ...toRefs(data),
      handleCode,
      textarea,
    };
  },
});
</script>

<style scoped lang='scss'>
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