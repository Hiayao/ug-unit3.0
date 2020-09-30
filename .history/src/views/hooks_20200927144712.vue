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
      {{ num }}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
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
      num: 10
    });
    const { x, y } = useMouse();
    const { time } = useTime();
    const {  addCount, cutCount, setCount } = useCount(data.num,{});
    const add = (): void => {
      addCount(data.num);
    };
    const cut = (): void => {
      cutCount();
    };
    const set = (): void => {
      setCount();
    };
    return {
      ...toRefs(data),
      x,
      y,
      time,
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