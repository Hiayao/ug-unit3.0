<template>
  <div id="qrcode" @click="handleCode"></div>
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
interface Data {}
export default defineComponent({
  name: "",
  props: {
    value: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const textarea = ref<HTMLInputElement | null>(null);
    const handleCode = (): void => {
      ctx.emit("handleCode");
      nextTick(() => {
        var canvas = qrcanvas({
          data: props.value, //二维码内容
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
</style>