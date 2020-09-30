<template>
  <a-progress
    :percent="percent"
    :show-info="showInfo"
    :strokeWidth="strokeWidth"
    class="progress"
  />
  <div class="base">
    <div class="speed"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    percent: {
      type: Number,
    },
    showInfo: {
      type: Boolean,
      default: false,
    },
    strokeWidth: {
      type: Number,
      default: 5,
    },
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
.progress {
  width: 50%;
}
.base {
  width: 100%;
  height: 5px;
  background: rgb(245, 245, 245);
  border-radius: 20px;
}
.speed{
  width: 20%;
  height: 100%;
  background: rgb(24,144,255);
  border-radius: 20px;
}
</style>