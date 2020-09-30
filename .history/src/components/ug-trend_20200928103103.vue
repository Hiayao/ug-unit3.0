<template>
  <div class="trendAll">
    <div class="turnover">
      <div>营业额</div>
      <component
        :is="label"
        :class="{ type, color: isReserve === true }"
      ></component>
      <div>5%</div>
    </div>

    <div class="profit">
      <div>利润</div>
      <component
        :is="labels"
        :class="{ types, colors: isReserve === true }"
      ></component>
      <div>5%</div>
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
      defaul: "up",
    },
    types: {
      type: String,
      defaul: "down",
    },
    isReserve: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      label: "",
      labels: "",
    });
    onMounted(() => {
      if (props.type === "up") {
        data.label = "CaretUpOutlined";
      }
      if (props.type === "down") {
        data.label = "CaretDownOutlined";
      }
      if (props.types === "up") {
        data.labels = "CaretUpOutlined";
      }
      if (props.types === "down") {
        data.labels = "CaretDownOutlined";
      }
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
.up {
  margin: 0 7px;
  color: red;
}
.down {
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