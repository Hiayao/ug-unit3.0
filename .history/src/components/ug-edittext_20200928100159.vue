<template>
  <div>
    <div @click="editIpt" v-show="flag === false">{{ text }}</div>
    <div v-show="flag === true">
      <input
        class="input"
        type="text"
        name=""
        v-model="value"
        ref="ipt"
        @blur="blur"
      />
      <a-button type="primary" style="margin: 0 5px" @click="sure">
        确定
      </a-button>
      <a-button type="danger" @click="cancel"> 取消 </a-button>
    </div>
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
  onUnmounted,
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
    let timer: any = null;
    const editIpt = (): void => {
      data.flag = true;
      data.value = props.text!;
      nextTick(() => {
        ipt.value!.focus();
      });
    };
    const blur = (): void => {
      timer = setTimeout(() => {
        data.flag = false;
      }, 150);
    };
    const sure = (): void => {
      ctx.emit("sure", data.value);
      // data.texts = data.value;
    };
    const cancel = (): void => {
      ctx.emit("cancel", data.value);
    };
    // onMounted(() => {
    //   data.texts = props.text!;
    // });

    onUnmounted(() => {
      clearTimeout(timer);
    });
    return {
      ...toRefs(data),
      editIpt,
      blur,
      ipt,
      sure,
      cancel,
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