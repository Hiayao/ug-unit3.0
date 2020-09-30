import { ref, onMounted } from 'vue'

export const useCount = () => {
    let num = ref<number>(0)
    const addCount = () => {
        num.value = num.value + 1
    }
    const cutCount = () => {
        if (num.value > 0) {
            num.value = num.value - 1
        }
    }
    const setCount = () => {
        num.value = 50
    }
    return { num, addCount, cutCount,setCount }
}
