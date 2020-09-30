<template>
<!-- turnover为营业额 -->
<!-- profit为利润 -->
<!-- type是营业额的图标标签名 -->
<!-- types是利润的图标标签名 -->
<!-- isReserve为是否反转图标，布尔值 -->
  <div class="All">
    <h1>趋势组件</h1>
    <div class="other-way-login">
      <span class="line"></span>
      <span class="txt">正常颜色</span>
      <span class="line"></span>
    </div>
    <ug-trend :type="type" :types="types" :turnover='turnover' :profit='profit'></ug-trend>

    <div class="other-way-login">
      <span class="line"></span>
      <span class="txt">反转颜色</span>
      <span class="line"></span>
    </div>
    <ug-trend :type="type" :types="types" :isReserve=true :turnover='turnover' :profit='profit'></ug-trend>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugTrend from "@/components/ug-trend.vue";
interface Data {
  type: string;
  types: string;
  profit: string;   //利润
  turnover: string;  //营业额
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugTrend,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      type: 'up',
      types: 'down',
      profit: '5%',
      turnover: '5%'
    });
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
    width: 400px;
    border: 0.5px solid #ddd;
}
.other-way-login .txt {
    color: black;
    vertical-align: middle;
    font-size: 16px;
    vertical-align: -20%;
    margin: 0 30px;
}
</style>