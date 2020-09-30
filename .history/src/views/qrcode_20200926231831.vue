<template>
  <div class="All">
    <ug-qrcode></ug-qrcode>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugQrcode from "../components/ug-qrcode.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugQrcode,
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
</style>