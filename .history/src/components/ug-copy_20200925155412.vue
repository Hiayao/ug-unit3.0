<template>
  <div class="flex ac">
    <input type="text" class="input" placeholder="输入的内容可以被复制"/>
    <div>复制</div>
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
.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
}
</style>