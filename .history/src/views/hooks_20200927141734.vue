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
      <span @click="add" ><a-button>增 加</a-button></span>
      <span @click="cut">减 少</span>
      {{ num }}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useMouse } from "@/hooks/useMouse";
import { useTime } from "@/hooks/useTime";
import { useCount } from "@/hooks/useCount";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const { x, y } = useMouse();
    const { time } = useTime();
    const { num, addCount, cutCount } = useCount();
    const add = (): void => {
      addCount();
    };
    const cut = (): void => {
      cutCount();
    };
    return {
      ...toRefs(data),
      x,
      y,
      time,
      num,
      add,
      cut,
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
  padding: 1px 5px;
  border: 1px solid #ddd;
}
</style>