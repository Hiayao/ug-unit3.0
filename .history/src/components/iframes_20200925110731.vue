<template>
  <div>
    <a-button type="primary" class="open" @click="open"> 打开内嵌网页 </a-button>
    <a-button type="primary"> 关闭内嵌网页 </a-button>
    <div v-html="www.baidu.com">
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({});
    // const open = (): void  => {

    // }
    return {
    //   ...toRefs(data),
    open,
    };
  },
});
</script>

<style scoped lang='scss'>
.open{
  margin-right: 20px;
}
</style>