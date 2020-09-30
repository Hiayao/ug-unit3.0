<template>
  <div class="All">
    <h1>趋势组件</h1>
    <div class="other-way-login">
      <span class="line"></span>
      <span class="txt">正常颜色</span>
      <span class="line"></span>
    </div>
    <ug-trend></ug-trend>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugTrend from "@/components/ug-trend.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugTrend,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
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
.other-way-login {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    text-align: center;
}
.other-way-login .line {
    display: inline-block;
    width: 350px;
    border: 1px solid black;
}
.other-way-login .txt {
    color: black;
    vertical-align: middle;
    vertical-align: -20%;
    margin: 0 30px;
}
</style>