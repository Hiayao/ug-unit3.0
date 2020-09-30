<template>
  <div class="footBar pof">
    <div class="Bar flex ac jsb">
      <div>{{ img }}</div>
      <div>
        <a-button>取消</a-button>
        <a-button type="primary" class="sure" @click="confirm"> 确认 </a-button>
      </div>
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
} from "vue";
import { message } from "ant-design-vue";
// interface Data {}
export default defineComponent({
  name: "",
  props: {
    img: {
      type: String,
      default: "",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    // const data: Data = reactive<Data>({});
    const confirm = (): void => {
    //   message.info("点击了确认按钮");
      ctx.emit('confirm')
    };
    // onMounted(() => {
    // });
    return {
      //   ...toRefs(data),
      confirm,
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