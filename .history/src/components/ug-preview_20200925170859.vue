<template>
  <div>
    <img
      src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"
      alt=""
      class="img"
      @click="clickPreviewImg"
    />
    <div class="shade poab" v-if="flag === true">2121</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  flag: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false,
    });
    const clickPreviewImg = (): void => {};
    return {
      ...toRefs(data),
      clickPreviewImg,
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 300px;
  height: 200px;
}
.shade {
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
}
</style>