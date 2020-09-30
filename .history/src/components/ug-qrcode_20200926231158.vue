<template>
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

</style>