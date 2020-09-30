<template>
  <div>
    <img
      src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"
      alt=""
      class="img"
      @click="clickPreviewImg"
    />
    <div class="shade pof flex ac jc" v-if="flag === true">
      <div class="box pof" @click="close"></div>
      <image
        src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg"
        alt=""
        ref="imgTurn"
        class="imgs"
        :style="{
          width: width + 'px',
          height: height + 'px',
        }"
      />
      <div class="iconBox poab flex jsa ac">
        <ZoomInOutlined class="icon" @click="big" />
        <ZoomOutOutlined class="icon" @click="small" />
        <RedoOutlined class="icon" @click="right" />
        <UndoOutlined class="icon" @click="left" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  ComputedRef,
  computed,
  ref
} from "vue";
interface Data {
  flag: boolean;
  width: number;
  height: number;
  turn: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false,
      width: 300,
      height: 200,
      turn: 0,
    });
    const clickPreviewImg = (): void => {
      data.flag = true;
    };
    const close = (): void => {
      data.flag = false;
    };
    const big = (): void => {
      if (data.width < 600 || data.height < 500) {
        data.width = data.width + 30;
        data.height = data.height + 20;
      }
    };
    const small = (): void => {
      if (data.width > 50 || data.height > 30) {
        data.width = data.width - 30;
        data.height = data.height - 20;
      }
    };
    const imgTurn = ref<HTMLImageElement | null>(null)
    const right = (): void => {
      data.turn = data.turn + 90;
      console.log(imgTurn);
      let x = 100;
      let y = 100;
      imgTurn.value!.style.transform = `rotate(${data.turn}`;
    };
    // const turns: ComputedRef<number> = computed(
    //   () =>
    //     data.turn  = data.turn + 90,
    //   // return `transform:rotate(${ data.turn + 'px'})`

    // );
    return {
      ...toRefs(data),
      clickPreviewImg,
      close,
      big,
      small,
      right,
      imgTurn
      // turns
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
  z-index: 999;
}
.shade {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
.iconBox {
  width: 400px;
  height: 50px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  bottom: 100px;
}
.box {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
}
.icon {
  color: #fff;
}
</style>