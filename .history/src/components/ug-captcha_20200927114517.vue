<template>
  <a-button @click="getCode">{{ checkCodeBtn.text }}</a-button>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  timer: number;
}
export default defineComponent({
  name: "",
  props: {
    timer: {
      type: Number,
      default: 60,
    }, 
    text: {
      type: String,
      default: "发送验证码",
    },
    activeText: {
      type: String,
      default: "发送中",
    },
    sendText:{
      type: String,
      default: "后重新获取",
    },
    endText:{
      type: String,
      default: "重新发送",
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      timer: 0,
    });
    const handleClick = (): void => {
      ctx.emit("handleClick");
    };
    // 验证码按钮禁用状态
    const checkCodeBtn = reactive({
      status: false,
      text: props.text,
    });
    // 还原验证码按钮的状态和文字 status:按钮状态，text：按钮文字
    const resetCheckBtn = (status: any, text: any) => {
      checkCodeBtn.status = status;
      checkCodeBtn.text = text;
    };
    // 获取验证码
    const getCode = () => {
      resetCheckBtn(true, props.activeText);
      // 延时时间 请求
      setTimeout(() => {
        handleClick();
      }, 1000);
      // 倒计时
      const authTimer = setInterval(() => {
        //定时器设置每秒递减
        data.timer--; //递减时间
        resetCheckBtn(true, data.timer + props.sendText);
        if (data.timer <= 0) {
          data.timer = 60;
          resetCheckBtn(false, props.endText); //60s时间结束还原v-show状态并清除定时器
          clearInterval(authTimer);
        }
      }, 1000);
    };
    onMounted(() => {
      // console.log(ctx);
      data.timer = props.timer;
    });
    return {
      ...toRefs(data),
      getCode,
      resetCheckBtn,
      checkCodeBtn,
      handleClick,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>