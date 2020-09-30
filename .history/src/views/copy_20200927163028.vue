<template>
  <div class="All">
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
    <!-- <ug-copy></ug-copy> -->
  </div>
</template> 

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
import ugCopy from "@/components/ug-copy.vue";
import { useCopy } from "@/hooks/useCopy";
import { message } from "ant-design-vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugCopy,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    const textarea = ref<HTMLInputElement | null>(null);
    const handlecopy = (): void => {
      useCopy(textarea.value!.value);
      message.success("复制成功");
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
.All {
  width: 1030px;
  height: 600px;
  margin: 24px 0 0 20px;
  background: #fff;
  padding: 20px;
}
</style>