<template>
  <div class="All flex">
    <div class="navBox">
      <div
        v-for="(item, index) in nav"
        :key="index"
        class="navItem"
        @click="goItem(item, index)"
      >
        <component :is="item.icon" style="margin-right: 10px"></component>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <router-view class="other"></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useRouter } from "vue-router";
interface Data {
  nav: object[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const data: Data = reactive<Data>({
      nav: [
        { name: "首页", icon: "HomeOutlined", path: "/" },
        { name: "常用hooks", icon: "ForkOutlined" },
        { name: "图片预览", icon: "MonitorOutlined" },
        { name: "趋势", icon: "AreaChartOutlined" },
        { name: "底部工具栏", icon: "ToolOutlined", path: "/foottoolbar" },
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
    const goItem = (item: any, index: number): void => {
      router.push(item.path);
    };
    return {
      ...toRefs(data),
      goItem,
    };
  },
});
</script>

<style scoped lang='scss'>
.navBox {
  width: 200px;
  background: rgb(224, 221, 224);
}
.navItem {
  padding: 13px 20px;
  &:hover {
    color: rgb(64, 158, 255);
    cursor: pointer;
  }
}
.other {
  height: 624px;
}
.All {
  background: rgb(240, 242, 245);
}
</style>