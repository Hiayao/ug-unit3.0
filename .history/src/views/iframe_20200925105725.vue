<template>
  <div class="All">
    <iframes></iframes>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import iframes from "@/components/iframes.vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {
    iframes,
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