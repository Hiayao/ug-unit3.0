<template>
  <div class="ugBadgeSon">
    <a-popover :title="titles" trigger="click" v-if="showPopover===true">
      <template v-slot:content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-badge
        :count="count"
        :overflow-count="overflowCount"
        :show-zero="showZero"
        :title="title"
      >t
        <BellOutlined class="icon" />
        <a href="#" class="head-example" />
      </a-badge>
    </a-popover>

    <a-badge
      :count="count"
      :overflow-count="overflowCount"
      :show-zero="showZero"
      :title="title"
      v-if="showPopover===false"
    >
      <BellOutlined class="icon" />
      <a href="#" class="head-example" />
    </a-badge>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    count: {
      type: Number,
      default: 0,
    },
    overflowCount: {
      type: Number,
      default: 99,
    },
    showZero: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    showPopover: {
      type: Boolean,
    },
    titles:{
      type: String,
      default: '标题'
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>