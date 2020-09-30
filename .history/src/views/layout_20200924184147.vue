<template>
  <div class="navBox">
    <div v-for="(item, index) in nav" :key="index">
      <component :is="item.icon"></component>
      <span>{{ item.name }}</span>
    </div>
  </div>
  <router-view></router-view>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  nav: object[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      nav: [
        { name: "首页", icon: "HomeOutlined" },
        { name: "常用hooks", icon: "ForkOutlined" },
        { name: "图片预览", icon: "MonitorOutlined" },
        { name: "趋势", icon: "AreaChartOutlined" },
        { name: "底部工具栏", icon: "ToolOutlined" },
        { name: "通知图标", icon: "BellOutlined" },
        { name: "内嵌网页", icon: "FundOutlined" },
        { name: "验证码按钮", icon: "MessageOutlined" },
        { name: "进度条", icon: "PaperClipOutlined" },
        { name: "二维码", icon: "QrcodeOutlined" },
        { name: "复制文本", icon: "CopyrightCircleOutlined" },
        { name: "生成水印", icon: "BorderTopOutlined" },
        { name: "可编辑文字", icon: "EditOutlined" },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.navBox{
  width: 200px;
  background: violet;
}
</style>