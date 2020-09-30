<template>
  <div class="All">
    <h1>通知按钮</h1>
    <div style="margin-bottom: 10px">
      <h3 style="margin-bottom: 15px">普通通知</h3>
      <ug-badge :count="5"></ug-badge>
    </div>
    <div style="margin-bottom: 10px">
      <h3 style="margin-bottom: 15px">为0的时候也显示数量</h3>
      <ug-badge :count="0" :showZero="true"></ug-badge>
    </div>
    <div style="margin-bottom: 10px">
      <h3 style="margin-bottom: 15px">当消息超过99条时</h3>
      <ug-badge :count="100" :overflowCount="99"></ug-badge>
    </div>
    <div style="margin-bottom: 10px">
      <h3 style="margin-bottom: 15px">
        自定义状态点上时显示的文字，默认为数量的值
      </h3>
      <ug-badge :count="100" :overflowCount="99" :title="title"></ug-badge>
    </div>
    <div style="margin-bottom: 10px">
      <h3 style="margin-bottom: 15px">默认弹出菜单和不同的弹出方式</h3>
      <div class="flex">
        <ug-badge
          :count="10"
          :showPopover="showPopover"
          :content="content"
        ></ug-badge>
        <ug-badge
          :count="10"
          :showPopover="showPopover"
          :trigger="trigger"
          :content="contents"
          :placement="placement"
          style="margin:0 20px"
        ></ug-badge>
        <ug-badge :count="10" :showPopover="showPopover"></ug-badge>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugBadge from "@/components/ug-badges.vue";
interface Data {
  title: string;
  showPopover: boolean;
  content: string;
  trigger: string;
  contents: string;
  placement: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugBadge,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      title: "这是你想说的话",
      showPopover: true,
      content: "默认为hover正上方弹出",
      trigger: "click",
      contents: "现在是click下方弹出",
      placement: "bottom",
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