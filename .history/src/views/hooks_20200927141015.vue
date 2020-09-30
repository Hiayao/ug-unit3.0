<template>
  <div class="All">
    <div style="margin-bottom:10px">
      <h3>鼠标移动的坐标</h3>
      {{ x }} --- {{ y }}
    </div>
    <div style="margin-bottom:10px">
      <h3>时间</h3>
      {{time}}
    </div>
    <div style="margin-bottom:10px">
      <span @click="add" class="box">增加</span>
      {{num}}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useMouse } from "@/hooks/useMouse";
import { useTime} from '@/hooks/useTime'
import {useCount} from '@/hooks/useCount'
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const { x, y } = useMouse();
    const {time} = useTime()
    const {num,addCount} = useCount()
    const add = (): void => {
      addCount()
    }
    return {
      ...toRefs(data),
      x,
      y,
      time,
      num,
      add
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
.box{
  padding: 2px;
  border: 1px solid #ddd;
}
</style>