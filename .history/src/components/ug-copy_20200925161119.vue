<template>
  <div class="flex ac">
    <input
      type="text"
      class="input"
      placeholder="输入的内容可以被复制"
      ref="textarea"
    />
    <a-button type="danger" style="margin-left: 20px" @click="handlecopy">
      复制
    </a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const textarea = ref<HTMLInputElement | null>(null);
    const handlecopy = (): void => {
      const oInput = document.createElement("input");
      console.log(textarea);
      console.log(oInput.value);
      //   oInput.value = textarea.value;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      console.log("成功");
      oInput.remove();
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