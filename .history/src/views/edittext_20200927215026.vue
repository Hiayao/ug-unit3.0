<template>
  <div class="All">
    <ug-edittext :text='text1'></ug-edittext>
    <ug-edittext :text='text2'></ug-edittext>
    <ug-edittext :text='text3'></ug-edittext>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugEdittext from "@/components/ug-edittext.vue";
interface Data {
  text1: string;
  text2: string;
  text3: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugEdittext,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      text1: 'ayao',
      text2: '是个',
      text3: '帅哥'
    });
    return {
      ...toRefs(data),
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