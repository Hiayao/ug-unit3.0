<template>
  <div @click="editIpt" v-show="flag === false">{{ texts }}</div>
  <div v-show="flag === true">
    <input
      class="input"
      type="text"
      name=""
      id=""
      v-model="value"
      ref="ipt"
      @blur="blur"
    />
    <a-button type="primary"> 确定 </a-button>
    <a-button type="danger"> 取消 </a-button>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  ref,
  nextTick,
} from "vue";
interface Data {
  flag: boolean;
  texts: string;
  value: string;
}
export default defineComponent({
  name: "",
  props: {
    text: {
      type: String,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      flag: false,
      texts: "",
      value: "",
    });
    const ipt = ref<HTMLInputElement | null>(null);
    const editIpt = (): void => {
      data.flag = true;
      data.value = data.texts;
      console.log(ipt);
      nextTick(() => {
        ipt.value!.focus();
      });
    };
    const blur = (): void => {
      data.flag = false;
    };
    onMounted(() => {
      data.texts = props.text!;
    });
    return {
      ...toRefs(data),
      editIpt,
      blur,
      ipt,
    };
  },
});
</script>

<style scoped lang='scss'>
.input {
  border: royalblue;
  box-shadow: none;
  padding: 5px;
}
</style>