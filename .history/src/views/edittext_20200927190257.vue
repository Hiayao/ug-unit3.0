<template>
  <div class="All">
    <ug-edittext></ug-edittext>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import ugEdittext from "@/components/ug-edittext.vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    ugEdittext,
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