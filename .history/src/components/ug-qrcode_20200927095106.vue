<template>
  <!-- <div class="flex ac">
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
	 -->
  <div id="qrcode"></div>
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
  // value: string;
  // size: number;
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
      requried: true
    },
    cellSize:{
      type: Number
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      // value: "",
      // size: 100,
    });
    const textarea = ref<HTMLInputElement | null>(null);
    const handleCode = (): void => {
      // nextTick(() => {
      //   var canvas = qrcanvas({
      //     data: props.value, //二维码内容
      //     size: props.size, //二维码大小
      //   });
      //   document.getElementById("qrcode")!.innerHTML = "";
      //   document.getElementById("qrcode")!.appendChild(canvas);
      // });
    };
    onMounted(() => {
      // if (props.size) {
      //   data.size = props.size;
      // }
      // if (props.value) {
      //   nextTick(() => {
      //     var canvas = qrcanvas({
      //       data: props.value, //二维码内容
      //       size: props.size, //二维码大小
      //     });
      //     document.getElementById("qrcode")!.innerHTML = "";
      //     document.getElementById("qrcode")!.appendChild(canvas);
      //   });
      // }
    });
    watch(
      () => [ props.size,props.value],
      (val, oldVal) => {
        // console.log(val);
        // console.log(oldVal);
        if (props.value) {
          nextTick(() => {
            var canvas = qrcanvas({
              data: props.value, //二维码内容
              size:props.size//二维码大小
            });
            document.getElementById("qrcode")!.innerHTML = "";
            document.getElementById("qrcode")!.appendChild(canvas);
          });
        }
      }
    )
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