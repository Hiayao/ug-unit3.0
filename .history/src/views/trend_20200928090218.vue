<template>
  <div class="All">
    <h1>趋势组件</h1>
    <ug-trend></ug-trend>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugTrend from "@/components/ug-trend.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugTrend,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.All {
  width: 1030px;
  height: 600px;
  margin: 24px 0 0 20px;
  background: #fff;
  padding: 20px;
}
</style>