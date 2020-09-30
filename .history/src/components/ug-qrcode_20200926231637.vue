<template>
 <div class="flex ac">
    <input
      type="text"
      class="input"
      placeholder="请输入文字或网址"
      ref="textarea"
      v-model="value"
    />
    <a-button type="danger" style="margin-left: 20px" @click="handlecopy">
      复制
    </a-button>
  </div>
 <div id="qrcode" ></div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted, nextTick} from 'vue'
import { qrcanvas } from 'qrcanvas';
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
})
onMounted(() => {
    nextTick(() => {
        var canvas = qrcanvas({
            data:'张艺耀是帅哥',  //二维码内容
            size: 100, //二维码大小
        })
        document.getElementById('qrcode')!.innerHTML = '';
        document.getElementById('qrcode')!.appendChild(canvas)
    })
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.input {
  outline: none;
  border: 1px solid #ddd;
  padding: 4px 10px;
  width: 600px;
  &:focus {
    border: 1px solid rgb(32, 133, 248);
  }
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>