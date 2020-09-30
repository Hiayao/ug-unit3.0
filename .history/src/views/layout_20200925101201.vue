<template>
  <div class="All flex">
    <div class="navBox">
      <div
        v-for="(item, index) in nav"
        :key="index"
        class="navItem"
        @click="goItem(item, index)"
        :class="{ blue: item.path === $router.currentRoute.value.path }"
      >
        <component :is="item.icon" style="margin-right: 10px"></component>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <router-view></router-view>
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
        { name: "常用hooks", icon: "ForkOutlined", path: "/hooks" },
        { name: "图片预览", icon: "MonitorOutlined", path: "/preview" },
        { name: "趋势", icon: "AreaChartOutlined", path: "/trend" },
        { name: "底部工具栏", icon: "ToolOutlined", path: "/foottoolbar" },
        { name: "通知图标", icon: "BellOutlined", path: "/noticeicon" },
        { name: "内嵌网页", icon: "FundOutlined", path: "/iframe" },
        { name: "验证码按钮", icon: "MessageOutlined", path: "/countdown" },
        { name: "进度条", icon: "PaperClipOutlined", path: "/progress" },
        { name: "二维码", icon: "QrcodeOutlined", path: "/qrcode" },
        { name: "复制文本", icon: "CopyrightCircleOutlined", path: "/copy" },
        { name: "生成水印", icon: "BorderTopOutlined", path: "/watermark" },
        { name: "可编辑文字", icon: "EditOutlined", path: "/edittext" },
      ],
    });
    const goItem = (item: any, index: number): void => {
      // console.log(router);
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
  background: rgb(248, 248, 248);
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
.blue {
  background: rgb(230, 247, 255);
  border-right: 2px solid rgb(64, 158, 255);
}
</style>