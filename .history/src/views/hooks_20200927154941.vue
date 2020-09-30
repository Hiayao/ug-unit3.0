<template>
  <div class="All">
    <div style="margin-bottom: 10px">
      <h3>鼠标移动的坐标</h3>
      {{ x }} --- {{ y }}
    </div>
    <div style="margin-bottom: 10px">
      <h3>时间</h3>
      {{ time }}
    </div>
    <div style="margin-bottom: 10px">
      <span @click="add" class="box"><a-button>增 加</a-button></span>
      <span @click="cut" class="box"><a-button>减 少</a-button></span>
      <span @click="set" class="box"><a-button>设 置</a-button></span>
      {{ current }}
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
} from "vue";
import { useMouse } from "@/hooks/useMouse";
import { useTime } from "@/hooks/useTime";
import { useCount } from "@/hooks/useCount";
interface Data {
  num: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      num: 10,
    });
    const { x, y } = useMouse();
    const { time } = useTime();
    // useCount()里面传一个参数，为初始值
    const { current, addCount, cutCount, setCount } = useCount(data.num);
    const add = (): void => {
      // addCount()可以传两个参，第一个是加法上限，
      // 第二个是每次加的值，若要传第二个，且不想有上限，则第一个传Infinity
      addCount(Infinity, 2);
    };
    const cut = (): void => {
      // cutCount()可以传两个参，第一个是减法下限，
      // 第二个是每次减的值，若要传第二个，且不想有下限，则第一个传-Infinity
      cutCount(0);
    };
    const set = (): void => {
      setCount(2000);
    };
    onMounted(() => {});
    return {
      ...toRefs(data),
      x,
      y,
      time,
      current,
      add,
      cut,
      set,
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
.box {
  margin-right: 5px;
}
</style>