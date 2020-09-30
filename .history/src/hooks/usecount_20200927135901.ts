import { ref, onMounted } from 'vue'

export const addCount = () => {
    let num = ref<number>(0)
    num.value = num.value + 1
}
