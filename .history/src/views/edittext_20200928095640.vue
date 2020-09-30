<template>
  <div class="All">
    <ug-edittext :text="text1" @sure="sure1" @cancel="cancel1"></ug-edittext>
    <ug-edittext :text="text2" @sure="sure2" @cancel="cancel2"></ug-edittext>
    <ug-edittext :text="text3" @sure="sure3" @cancel="cancel3"></ug-edittext>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugEdittext from "@/components/ug-edittext.vue";
import { message } from "ant-design-vue";
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
      text1: "ayao",
      text2: "是个",
      text3: "帅哥",
    });
    const sure1 = (val: any): void => {
      data.text1 = val
      message.success("修改成功");
    };
    const cancel1 = (val: any): void => {
      message.info("已取消修改");
    };
     const sure2 = (val: any): void => {
      data.text2 = val
      message.success("修改成功");
    };
    const cancel2 = (val: any): void => {
      message.info("已取消修改");
    };
     const sure3 = (val: any): void => {
      data.text3 = val
      message.success("修改成功");
    };
    const cancel3 = (val: any): void => {
      message.info("已取消修改");
    };
    return {
      ...toRefs(data),
      sure1,
      cancel1,
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