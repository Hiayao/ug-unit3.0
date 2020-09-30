<template>
 <div class="All">
   <h1>图片预览</h1>
   <ug-preview></ug-preview>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import ugPreview from '@/components/ug-preview.vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
ugPreview
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
.All {
  width: 1030px;
  height: 600px;
  margin: 24px 0 0 20px;
  background: #fff;
  padding: 20px;
}
</style>