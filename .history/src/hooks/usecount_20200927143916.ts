import { ref, onMounted } from 'vue'

export const useCount = (numDefault = 0, { min, max }: { min?: number; max?: number }) => {
    let num = ref<number>(0)
    const addCount = (num: any) => {
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
    return { num, addCount, cutCount, setCount }
}
