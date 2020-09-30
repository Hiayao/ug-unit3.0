<template>
  <div>
    <a-badge count="5">
      <BellOutlined class="icon"/>
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
svg{
  width: 50px;
  height: 50px;
}
</style>