<template>
 <div>
     <div>营业额</div>
     <CaretUpOutlined />
     <div>5%</div>

     <div>利润</div>
     <CaretDownOutlined />
     <div>5%</div>
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

</style>