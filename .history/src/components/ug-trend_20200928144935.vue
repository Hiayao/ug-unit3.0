<template>
  <div class="trendAll">
    <div class="turnover">
      <slot name="title"></slot>
      <CaretUpOutlined v-if="type==='up'" class="red" :class="{color: isReserve === true}"/>
      <CaretDownOutlined v-if="type==='down'" class="green" :class="{ colors: isReserve === true }"/>
      <slot name="rate"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  nextTick,
} from "vue";
interface Data {
  label: string;
  labels: string;
}
export default defineComponent({
  name: "",
  props: {
    type: {
      type: String,
      default: "up",
    },
    types: {
      type: String,
      default: "down",
    },
    isReserve: {
      type: Boolean,
      default: false,
    },
    profit: {
      type: String,
      requried: true,
    },
    turnover: {
      type: String,
      requried: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      label: "",
      labels: "",
    });
    onMounted(() => {
      
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.turnover {
  display: flex;
  align-items: center;
}
.profit {
  display: flex;
  align-items: center;
}
.trendAll {
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  justify-content: space-between;
}
.red {
  margin: 0 7px;
  color: red;
}
.green {
  margin: 0 7px;
  color: rgb(82, 196, 26);
}
.color {
  color: rgb(82, 196, 26);
  margin: 0 7px;
}
.colors {
  margin: 0 7px;
  color: red;
}
</style>