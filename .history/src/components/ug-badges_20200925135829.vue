<template>
  <div class="ugBadgeSon">
    <a-badge count="5" :overflow-count="overflow-count">
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
  props: {
    overflowCount:{
      type: Number,
      default: 100
    }
  },
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

</style>