<template>
  <div class="trendAll">
    <div class="turnover">
      <div>营业额</div>
      <CaretUpOutlined class="up"/>
      <div>5%</div>
    </div>

    <div class="profit">
      <div>利润</div>
      <CaretDownOutlined class="down"/>
      <div>5%</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.turnover {
  display: flex;
  align-items: center;
}
.profit {
  display: flex;
  align-items: center;
}
.trendAll{
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    justify-content: space-between;
}
.up{
    margin:0 10px
}
.down{
    margin: 10px
}
</style>