<template>
  <div>
    <a-button type="primary" class="open" @click="open">
      打开内嵌网页
    </a-button>
    <a-button type="primary" @click="close"> 关闭内嵌网页 </a-button>
    <div style="margin-top: 20px" v-if="flag === true">
      <iframe src="https://www.baidu.com" class="iframe"> </iframe>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  flag: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false,
    });
    const open = (): void => {
      data.flag = true;
    };
    const close = (): void => {
      data.flag = false;
    };
    return {
      ...toRefs(data),
      open,
      close,
    };
  },
});
</script>

<style scoped lang='scss'>
.open {
  margin-right: 20px;
}
.iframe {
  width: 1000px;
  height: 500px;
}
</style>