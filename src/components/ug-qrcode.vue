<template>
  <div>
    <div id="qrcode" ref="qrcode"></div>
  </div>
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
  watch,
} from "vue";
import { qrcanvas } from "qrcanvas";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    size: {
      type: Number,
      default: 100,
    },
    value: {
      type: String,
      requried: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const qrcode = ref<HTMLDivElement | null>(null);
    onMounted(() => {});
    watch(
      () => props.value,
      (val, oldVal) => {
        nextTick(() => {
          var canvas = qrcanvas({
            data: props.value, //二维码内容
            size: props.size, //二维码大小
          });
          qrcode.value!.innerHTML = "";
          qrcode.value!.appendChild(canvas);
        });
      }
    );
    return {
      ...toRefs(data),
      qrcode,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>