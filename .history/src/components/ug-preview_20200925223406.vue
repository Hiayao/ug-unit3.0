<template>
  <div>
    <img :src="url" alt="" class="img" @click="clickPreviewImg" />
    <div class="shade pof flex ac jc" v-if="flag === true">
      <div class="box pof" @click="close"></div>
      <img
        :src="url"
        alt=""
        ref="imgTurn"
        class="imgs"
        :style="{
          width: width + 'px',
          height: height + 'px',
          transform: 'rotate' + '(' + turn + 'deg' + ')',
        }"
      />
      <div class="iconBox poab flex jsa ac">
        <ZoomInOutlined class="icon" @click="big" />
        <ZoomOutOutlined class="icon" @click="small" />
        <RedoOutlined class="icon" @click="right" />
        <UndoOutlined class="icon" @click="left" />
      </div>
      <CloseOutlined class="closeIcon poab" v-if="showMask"/>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  flag: boolean;
  width: number;
  height: number;
  turn: number;
}
export default defineComponent({
  name: "",
  props: {
    url: {
      type: String,
    },
    showMask:{
      type: Boolean,
    }
  },
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
      if(!props.showMask){
        data.flag = false;
      }
      else{
        data.flag = props.showMask
      }
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
    const right = (): void => {
      data.turn = data.turn + 90;
    };
    const left = (): void => {
      data.turn = data.turn - 90;
    };
    return {
      ...toRefs(data),
      clickPreviewImg,
      close,
      big,
      small,
      right,
      left,
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
  display: inline-block;
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
.closeIcon{
  color: #fff;
  right: 20px;
  top: 20px;
  z-index: 999;
}
</style>