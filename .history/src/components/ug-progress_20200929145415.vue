<template>
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
  onUnmounted,
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
    isAnimate: {
      type: Boolean,
      default: false,
    },
    duration:{
      type: Number,
      default: 2000
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const speed = ref();
    const base = ref();
    let timer: any = null;
    onMounted(() => {
      console.log(speed);
      nextTick(() => {
        speed.value.style.width = props.percent + "%";
        if (props.isAnimate === true) {
          // timer = setTimeout(() => {
            
            speed.value.style.transition = "width" +" "+ props.duration/1000 +"s" +" "+ "ease 0s";
          // }, 150);
        }
        if (props.isAnimate === false) {
          speed.value.style.width = props.percent + "%";
        }
        base.value.style.height = props.strokeWidth + "px";
        speed.value.style.background = props.bgColor;
        console.log(window.getComputedStyle(speed.value));
      });
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    return {
      ...toRefs(data),
      speed,
      base,
      timer,
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
  width: 0px;
  height: 100%;
  background: rgb(24, 144, 255);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  // animation: zoomIcon linear 0.9s  alternate;
}
// @keyframes zoomIcon {
//   from {
//     width: 0px
//   }

//   to {
//     width: 200px
//   }
// }
.rate {
  position: absolute;
  right: 5px;
  color: #fff;
}
</style>