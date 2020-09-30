<template>
  <a-button @click="getCode">{{checkCodeBtn.text}}</a-button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
interface Data {
  timer: number;
}
export default defineComponent({
  name: "",
  props: {
    //   timer: {
    //       type: Number,
    //       default: 60
    //   }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      timer: 60,
    });
    // 验证码按钮禁用状态
    const checkCodeBtn = reactive({
      status: false,
      text: "发送验证码",
    });
    // 还原验证码按钮的状态和文字 status:按钮状态，text：按钮文字
    const resetCheckBtn = (status: any, text: any) => {
      checkCodeBtn.status = status;
      checkCodeBtn.text = text;
    };
    // 获取验证码
    const getCode = () => {
      resetCheckBtn(true, "发送中...");
      // 延时时间 请求
      setTimeout(() => {
        console.log(111);
      }, 1000);
      // 倒计时
      const authTimer = setInterval(() => {
        //定时器设置每秒递减
        data.timer--; //递减时间
        resetCheckBtn(true, data.timer + "后重新获取");
        if (data.timer <= 0) {
          data.timer = 60;
          resetCheckBtn(false, "重新发送"); //60s时间结束还原v-show状态并清除定时器
          clearInterval(authTimer);
        }
      }, 1000);
    };
    onMounted(() => {
        console.log(ctx);
    })
    return {
      ...toRefs(data),
      getCode,
      resetCheckBtn,
      checkCodeBtn,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>