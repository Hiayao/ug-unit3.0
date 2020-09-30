<template>
<h1 class="title">底部工具栏</h1>
<ug-footbar :img='img' @confirm='confirm' @close='close' :textOne="textOne" :textTwo="textTwo"></ug-footbar>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugFootbar from "../components/ug-footbar.vue";
import { message } from "ant-design-vue";
interface Data {
    img: string;
    textOne: String;
    textTwo: String;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugFootbar,
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
        img: '这是一句默认文字',
        textOne: '取消',
        textTwo: '确认'
    });
    const confirm = (): void =>{
         message.success("`点击了${data.textOne}按钮`");
    }
    const close = (): void =>{
         message.info(`点击了${data.textTwo}按钮`);
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