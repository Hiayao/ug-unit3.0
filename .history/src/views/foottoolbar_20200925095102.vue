<template>
<h1 class="title">底部工具栏</h1>
<footbar :img='img' @confirm='confirm' @close='close'></footbar>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import footbar from "../components/footbar.vue";
import { message } from "ant-design-vue";
interface Data {
    img: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    footbar,
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
        img: '这是一句默认文字'
    });
    const confirm = (): void =>{
         message.info("点击了确认按钮");
    }
    const close = (): void =>{
         message.info("点击了取消按钮");
    }
    return {
      ...toRefs(data),
      confirm,
      close
    };
  },
});
</script>

<style scoped lang='scss'>
.title{
    width: 1030px;
    height: 600px;
    margin: 24px 0 0 20px;
    background: #fff;
    padding: 20px;
}
</style>