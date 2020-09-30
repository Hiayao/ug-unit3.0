<template>
  <!-- <a-progress
      :percent="percent"
      :show-info="showInfo"
      :strokeWidth="strokeWidth"
      class="progress"
    /> -->
  <div class="base" ref="base">
    <div class="speed" ref="speed"></div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  ref,
  nextTick,
} from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    percent: {
      type: Number,
      default: 20,
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
    const speed = ref();
    const base = ref();
    onMounted(() => {
      console.log(speed);
      nextTick(() => {
        speed.value.style.width = props.percent + "%";
        base.value.style.height = props.strokeWidth + "px";
      });
    });
    return {
      ...toRefs(data),
      speed,
      base,
    };
  },
});
</script>

<style scoped lang='scss'>
.base {
  width: 100%;
  height: 5px;
  background: rgb(245, 245, 245);
  border-radius: 20px;
}
.speed {
  height: 100%;
  background: rgb(24, 144, 255);
  border-radius: 20px;
}
</style>