<template>
  <div class="All">
    <div style="margin-bottom: 10px">
      <h3>普通进度条</h3>
      <!-- percent为进度量(number)，showInfo为是否显示百分百(布尔类型) -->
      <ug-progress :percent="50" class="progress"></ug-progress>
    </div>

    <div style="margin-bottom: 10px">
      <h3>普通进度条控制高度</h3>
      <!-- strokeWidth为高度(number),默认值为5,单位px -->
      <ug-progress :percent="30" :strokeWidth="30" class="progress"></ug-progress>
    </div>

     <div style="margin-bottom: 10px">
      <h3>文字内显</h3>
      <ug-progress :percent="45.8" :strokeWidth="20" :textInside=true class="progress"></ug-progress>
    </div>
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
.progress{
  width: 500px;
}
</style>