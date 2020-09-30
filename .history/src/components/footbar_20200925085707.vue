<template>
  <div class="flex">
    <div>{{ img }}</div>
    <div>
      <a-button>取消</a-button>
      <a-button type="primary"> 确认 </a-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// interface Data {}
export default defineComponent({
  name: "",
  props: {
    img: {
      type: String,
      default: "",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    // let data: Data = reactive<Data>({});
    return {
    //   ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>