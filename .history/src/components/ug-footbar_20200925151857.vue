<template>
  <div class="footBar pof">
    <div class="Bar flex ac jsb">
      <div>{{ img }}</div>
      <div>
        <a-button @click="close">{{ textOne }}</a-button>
        <a-button type="primary" class="sure" @click="confirm">{{
          textTwo
        }}</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { message } from "ant-design-vue";
// interface Data {}
export default defineComponent({
  name: "",
  props: {
    img: {
      type: String,
      default: "",
    },
    textOne: {
      type: String,
      default: "取消",
    },
    textTwo: {
      type: String,
      default: "确认",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({});
    const confirm = (): void => {
      ctx.emit("confirm");
    };
    const close = (): void => {
      ctx.emit("close");
    };
    return {
      //   ...toRefs(data),
      confirm,
      close,
    };
  },
});
</script>

<style scoped lang='scss'>
.footBar {
  width: 100%;
  height: 70px;
  background: #fff;
  bottom: 0;
  border-top: 1px solid #ddd;
}
.Bar {
  width: 100%;
  height: 100%;
  padding: 0 20px;
}
.sure {
  margin-left: 10px;
}
</style>