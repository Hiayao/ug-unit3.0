<template>
  <div class="pore">
    <img
      src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"
      alt=""
      class="img"
      @click="clickPreviewImg"
    />
    <img
      src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"
      alt=""
      class="imgs poab"
      v-if="flag === true"
    />
    <div class="shade pof flex jc" v-if="flag === true" @click="close">
      <div class="iconBox poab"></div>
    </div>
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
    const clickPreviewImg = (): void => {
      data.flag = true;
    };
    const close = (): void => {
      data.flag = false;
    };
    return {
      ...toRefs(data),
      clickPreviewImg,
      close,
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 300px;
  height: 200px;
}
.imgs {
  width: 300px;
  height: 200px;
  left: 34%;
}
.shade {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
}
.iconBox {
  width: 400px;
  height: 50px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  margin-top: 400px;
}
</style>