<template>
  <div class="All">
    <h3>普通进度条</h3>
    <!-- percent为进度量(number)，showInfo为是否显示百分百(布尔类型) -->
    <ug-progress :percent=30></ug-progress>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugProgress from "../components/ug-progress.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugProgress,
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