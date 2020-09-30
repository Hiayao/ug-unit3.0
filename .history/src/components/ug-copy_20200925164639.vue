<template>
  <div class="flex ac">
    <input
      type="text"
      class="input"
      placeholder="输入的内容可以被复制"
      ref="textarea"
      v-model="value"
    />
    <a-button type="danger" style="margin-left: 20px" @click="handlecopy">
      复制
    </a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    const textarea = ref<HTMLInputElement | null>(null);
    const handlecopy = (): void => {
        console.log(111);
    };
    return {
      ...toRefs(data),
      handlecopy,
      textarea,
    };
  },
});
</script>

<style scoped lang='scss'>
.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  width: 600px;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>