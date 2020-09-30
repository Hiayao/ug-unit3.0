<template>
  <div class="All">
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

    <ug-input v-model="value" @input="input"></ug-input>
  </div>
</template> 

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
import { useCopy } from "@/hooks/useCopy";
import { message } from "ant-design-vue";
import ugInput from "@/components/ug-input.vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: { ugInput },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    const textarea = ref<HTMLInputElement | null>(null);
    const handlecopy = (): void => {
      useCopy(textarea.value!.value);
      message.success("复制成功");
    };
    const input = (): void => {
      console.log(data.value);
    };
    return {
      ...toRefs(data),
      handlecopy,
      textarea,
      input
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