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
      <ug-progress
        :percent="30"
        :strokeWidth="30"
        class="progress"
      ></ug-progress>
    </div>

    <div style="margin-bottom: 10px">
      <h3>文字内显</h3>
      <!-- textInside为是否显示内置文字，默认为false不显示 -->
      <ug-progress
        :percent="45.8"
        :strokeWidth="20"
        :textInside="true"
        class="progress"
      ></ug-progress>
    </div>

    <div style="margin-bottom: 10px">
      <h3>自定义颜色</h3>
      <!-- bgColor: 背景颜色,字符串类型,默认#1890FF -->
      <ug-progress :percent="50" class="progress" bgColor="#000"></ug-progress>
    </div>

    <div style="margin-bottom: 10px">
      <h3>自定义显示内容</h3>
      <!-- lineData为是否显示自定义内容 默认为false -->
      <ug-progress :percent="50" :lineData=true class="progress">
        <template #default>
          <!-- 下面的内容是自定义的 -->
          <div class="flex jsb">
            <div>50%</div>
            <div>随便写</div>
          </div>
          <!-- 到此 -->
        </template>
      </ug-progress>
    </div>

    <div style="margin-bottom: 10px">
      <h3>进度条加载动画</h3>
      <!-- percent为进度量(number)，showInfo为是否显示百分百(布尔类型) -->
      <ug-progress :percent="50" class="progress"></ug-progress>
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
.progress {
  width: 500px;
}
</style>