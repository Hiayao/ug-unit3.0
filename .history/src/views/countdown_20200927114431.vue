<template>
  <div class="All">
    <!-- text为按钮内容 -->
    <!-- activeText点击按钮之后的过渡文字 -->
    <!-- sendText发送验证码倒计时文字 -->
    <!-- endText倒计时结束文字 -->
    <!-- timer倒计时时间 -->
    <code-button @handleClick="handleClick" :text="text"></code-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import codeButton from "@/components/codeButton.vue";
import {message} from 'ant-design-vue'
interface Data {
  text: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: { codeButton },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      text: '点我'
    });
    const handleClick = (): void => {
        message.info('绑定handleClick事件可进行操作');
    };
    return {
        ...toRefs(data),
      handleClick
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
</style>