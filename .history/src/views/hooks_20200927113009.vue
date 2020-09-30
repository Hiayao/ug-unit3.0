<template>
  <div class="All">
    <h3>鼠标移动的坐标</h3>
    {{x}}---{{y}}
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useMouse } from "@/hooks/useMouse";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const {x,y} = useMouse()
    return {
      ...toRefs(data),
      x,
      y
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
</style>