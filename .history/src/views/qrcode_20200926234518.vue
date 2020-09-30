<template>
  <div class="All">
    <!-- 1:npm安装 npm install qrcanvas -->
    <!-- 2. 在用的页面引入import { qrcanvas } from 'qrcanvas'; -->
    <div class="flex ac">
      <input
        type="text"
        class="input"
        placeholder="请输入文字或网址"
        ref="textarea"
        v-model="value"
      />
      <a-button
        type="primary"
        style="margin-left: 20px"
        @handleCode="handleCode"
      >
        生成二维码
      </a-button>
    </div>
    <h3>不设置宽高</h3>
    <ug-qrcode :value="value"></ug-qrcode>
    <h3>设置宽高</h3>
    <ug-qrcode></ug-qrcode>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugQrcode from "../components/ug-qrcode.vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugQrcode,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    const handleCode = (): void => {
      console.log(111);
    };
    return {
      ...toRefs(data),
      handleCode,
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
.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  width: 600px;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>