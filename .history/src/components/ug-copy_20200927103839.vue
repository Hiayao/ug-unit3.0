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
       
        let oInput = document.createElement('input') // 生成一个节点
        oInput.value = textarea.value!.value  // 你要复制的文本
        document.body.appendChild(oInput) // 插入文档
        oInput.select() // 选择对象
        document.execCommand("Copy") // 执行浏览器复制命令
        document.body.removeChild(oInput) //移除标签
        // this.$message({
        //   message: '已复制本站链接，粘贴分享给好友吧！',
        //   type: 'success'
        // })
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