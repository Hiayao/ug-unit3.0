<template>
  <div class="All">
    <h1>图片预览</h1>
    <h3>单图片预览,点击遮罩层可关闭</h3>
    <ug-preview :url="url"></ug-preview>
    <h3>单图片预览,点击遮罩层不可关闭</h3>
    <!-- 传showMask为true，点击遮罩层不会被关闭 -->
    <ug-preview :url="url" :showMask='showMask'></ug-preview>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugPreview from "@/components/ug-preview.vue";
interface Data {
  url: string;
  showMask: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugPreview,
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      url: require("../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"),
      showMask: true
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
  overflow: auto;
}
</style>