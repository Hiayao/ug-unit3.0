import { ref, onMounted } from 'vue'

export const useCount = (numDefault = 0, { min, max }: { min?: number; max?: number }) => {
    let num = ref<number>(0)
    const addCount = () => {
        num.value = num.value + 1
    }
    const cutCount = () => {
        if (numDefault > 0) {
            numDefault = numDefault - 1
        }
    }
    const setCount = () => {
        numDefault = 50
    }
    return { num, addCount, cutCount, setCount }
}
