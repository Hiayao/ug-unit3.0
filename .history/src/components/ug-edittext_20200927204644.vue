<template>
  <div @click="editIpt" v-show="flag ===false">{{ texts }}</div>
  <input type="text" name="" id="" v-model="value" v-show="flag===true" ref="ipt" @blur="blur"/>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted ,ref} from "vue";
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
      texts: '',
      value: ''
    });
    const ipt = ref<HTMLInputElement | null>(null)
    const editIpt =(): void => {
      data.flag = true
      data.value = data.texts
      ipt.value!.focus()
    }
    const blur = (): void => {
      data.flag = false
    }
    onMounted(() => {
      data.texts = props.text!
    })
    return {
      ...toRefs(data),
      editIpt,
      blur,
      ipt
    };
  },
});
</script>

<style scoped lang='scss'>
</style>