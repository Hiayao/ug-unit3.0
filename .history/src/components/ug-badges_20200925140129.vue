<template>
  <div class="ugBadgeSon">
    <a-badge count="count" :overflow-count="overflowCount">
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
    count:{
      type: Number,
      default: 0
    },
    overflowCount:{
      type: Number,
      default: 99
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