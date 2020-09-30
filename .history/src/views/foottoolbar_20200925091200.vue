<template>
<div class="title">底部工具栏</div>
<footbar :img='img'></footbar>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import footbar from "../components/footbar.vue";
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
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.title{
    width: 800px;
    height: 600px;
    background: #fff;
}
</style>