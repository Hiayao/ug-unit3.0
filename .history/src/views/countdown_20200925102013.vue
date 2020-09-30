<template>
  <div class="All">
      <code-button></code-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import codeButton from '@/components/codeButton.vue'
// interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {codeButton},
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({});
    return {
    //   ...toRefs(data),
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