<template>
  <div class="All">
    <code-button @operation="operation"></code-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import codeButton from "@/components/codeButton.vue";
import {message} from 'ant-design-vue'
// interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: { codeButton },
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({});
    const operation = (): void => {
        message.info('绑定operation事件可进行操作');
    };
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