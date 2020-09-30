<template>
 <div>
     <img src="../assets/96ca9f69ly1fxziveeqm0j20fa0bhwfw.jpg" alt="" class="img">
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
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
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.img{
    width: 300px;
    height: 200px;
}
</style>