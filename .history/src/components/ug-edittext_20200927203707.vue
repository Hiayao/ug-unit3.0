<template>
  <div @click="editIpt" v-show="flag ===false">{{ texts }}</div>
  <input type="text" name="" id="" v-model="value" v-show="flag===true"/>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
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
    const editIpt =(): void => {
      data.flag = true
      data.value = data.texts
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