<template>
  <div>
    <div class="flex">
      <div v-for="(item, index) in url" :key="index" style="margin-right: 15px">
        <img :src="item" alt="" class="img" @click="clickPreviewImg(item)" />
      </div>
    </div>
    <div class="shade pof flex ac jc" v-if="flag === true">
      <div class="box pof" @click="close"></div>
      <img
        :src="img"
        alt=""
        ref="imgTurn"
        class="imgs"
        :style="{
          width: width + 'px',
          height: height + 'px',
          transform: 'rotate' + '(' + turn + 'deg' + ')',
        }"
      />
      <div class="iconBox poab flex jsa ac" v-if="url.length === 1">
        <div v-for="(item, index) in icon" :key="index" style="width: 25%">
          <component
            :is="item"
            class="icon"
            @click="handleChange(index)"
            @mouseenter="mouseenter(index)"
            @mouseleave="mouseleave(index)"
            :class="{ enlarge: flgs === index }"
          ></component>
        </div>
      </div>
      <LeftOutlined class="left poab" />
      <RightOutlined class="right poab" />
      <CloseOutlined class="closeIcon poab" v-if="showMask" @click="closes" />
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
  flgs: number;
  icon: string[];
  img: string;
}
export default defineComponent({
  name: "",
  props: {
    url: {
      type: String,
    },
    showMask: {
      type: Boolean,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false,
      width: 300,
      height: 200,
      turn: 0,
      flgs: -1,
      icon: [
        "ZoomInOutlined",
        "ZoomOutOutlined",
        "RedoOutlined",
        "UndoOutlined",
      ],
      img: "",
    });
    const clickPreviewImg = (item: string): void => {
      data.flag = true;
      data.img = item;
    };
    const close = (): void => {
      if (!props.showMask) {
        data.flag = false;
      } else {
        data.flag = props.showMask;
      }
    };
    const handleChange = (index: number) => {
      if (index === 0) {
        if (data.width < 600 || data.height < 500) {
          data.width = data.width + 30;
          data.height = data.height + 20;
        }
      }
      if (index === 1) {
        if (data.width > 50 || data.height > 30) {
          data.width = data.width - 30;
          data.height = data.height - 20;
        }
      }
      if (index === 2) {
        data.turn = data.turn + 90;
      }
      if (index === 3) {
        data.turn = data.turn - 90;
      }
    };
    const closes = (): void => {
      data.flag = false;
    };
    const mouseenter = (index: number): void => {
      data.flgs = index;
    };
    const mouseleave = (index: number): void => {
      data.flgs = index;
    };
    return {
      ...toRefs(data),
      clickPreviewImg,
      close,
      closes,
      mouseenter,
      mouseleave,
      handleChange,
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
  font-size: 30px;
  width: 100%;
}
.closeIcon {
  color: #fff;
  font-size: 30px;
  right: 20px;
  top: 20px;
  z-index: 999;
}
.enlarge {
  font-size: 34px;
}
.left {
  font-size: 34px;
  color: #fff;
  z-index: 999;
}
.right {
  font-size: 34px;
  color: #fff;
  z-index: 999;
}
</style>