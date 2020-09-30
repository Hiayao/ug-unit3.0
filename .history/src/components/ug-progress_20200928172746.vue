<template>
  <!-- <a-progress
      :percent="percent"
      :show-info="showInfo"
      :strokeWidth="strokeWidth"
      class="progress"
    /> -->
  <div class="progress">
    <slot v-if="lineData === true"></slot>
    <div class="base" ref="base">
      <div class="speed" ref="speed">
        <div v-if="textInside === true" class="rate">{{ percent }}%</div>
      </div>
    </div>
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
    textInside: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#1890FF",
    },
    lineData: {
      type: Boolean,
      default: false,
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
        speed.value.style.background = props.bgColor;
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
.progress {
  width: 100%;
}
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
  position: relative;
  display: flex;
  align-items: center;
}
.rate {
  position: absolute;
  right: 5px;
  color: #fff;
}
</style>