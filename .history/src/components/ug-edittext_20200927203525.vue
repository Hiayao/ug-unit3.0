<template>
  <div @click="editIpt">{{ texts }}</div>
  <input type="text" name="" id="" v-model="value"/>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
interface Data {
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
      texts: '',
      value: ''
    });
    const editIpt =(): void => {

    }
    onMounted(() => {
      data.texts = props.text!
    })
    return {
      ...toRefs(data),
      editIpt
    };
  },
});
</script>

<style scoped lang='scss'>
</style>