<template>
  <div class="All">
    <h1>通知按钮</h1>
    <div>
      <h3 style="margin-bottom:15px">普通通知</h3>
      <ug-badge></ug-badge>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugBadge from "@/components/ug-badges.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugBadge,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
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