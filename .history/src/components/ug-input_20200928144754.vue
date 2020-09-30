<template>
  <div>
    <input type="text" :placeholder="placeholder" :value='value' @input="input(e)" class="ug-input" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value:{
         default: "",
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const input = (e: any): void => {
        console.log(e);
        ctx.emit('input',e.target.value)
    }
    return {
      ...toRefs(data),
      input
    };
  },
});
</script>

<style scoped lang='scss'>
.ug-input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  width: 100%;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
  &:hover {
    border: 1px solid rgb(32, 133, 248);
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>