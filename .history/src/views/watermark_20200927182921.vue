<template>
  <div class="All">
    <a-button type="primary" @click="create" style="margin-right:10px"> 生成水印 </a-button>
    <a-button type="danger" @click="ruin"> 取消水印 </a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import useWaterMark from "@/hooks/useWatermark";
import outWatermark from '@/hooks/outWatermark'
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const create = (): void => {
      useWaterMark.set("阿耀真帅");
    };
    const ruin = (): void => {
      outWatermark.out('')
    }
    return {
      ...toRefs(data),
      create,
      ruin
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