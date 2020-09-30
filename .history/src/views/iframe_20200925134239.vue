<template>
  <div class="All">
    <ug-iframe></ug-iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugIframe from "@/components/ug-iframe.vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugIframe,
  },
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({
    // })
    return {
      // ...toRefs(data),
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