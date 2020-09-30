<template>
  <div v-if="size === 100 && value !== ''">
    <h3>不设置宽高</h3>
    <div id="qrcode"></div>
  </div>
  <div v-if="size !== 100 && value !== ''">
    <h3>设置宽高</h3>
    <div id="qrcodes"></div>
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
interface Data {
}
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
    let data: Data = reactive<Data>({
    });
    onMounted(() => {
    });
    watch(
      () => [props.size, props.value],
      (val, oldVal) => {
        // console.log(val);
        // console.log(oldVal);
        if (props.value && props.size === 100) {
          nextTick(() => {
            var canvas = qrcanvas({
              data: props.value, //二维码内容
              size: 100, //二维码大小
            });
            document.getElementById("qrcode")!.innerHTML = "";
            document.getElementById("qrcode")!.appendChild(canvas);
          });
        }
        if (props.size !== 100 && props.value) {
          nextTick(() => {
            var canvas = qrcanvas({
              data: props.value, //二维码内容
              size: props.size, //二维码大小
            });
            document.getElementById("qrcodes")!.innerHTML = "";
            document.getElementById("qrcodes")!.appendChild(canvas);
          });
        }
      }
    );
    return {
      ...toRefs(data),
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