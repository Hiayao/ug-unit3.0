<template>
  <div class="All">
    <iframe></iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import iframe from "@/components/iframe.vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {
    iframe,
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