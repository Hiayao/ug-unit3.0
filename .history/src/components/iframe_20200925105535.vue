<template>
  <div>
    <a-button type="primary"> 打开内嵌网页 </a-button>
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
    return {
    //   ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>