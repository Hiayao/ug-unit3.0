import { ref, onMounted } from 'vue'

export const useCount = (currents = 0, min?: number, max?: number,) => {
    let current = ref<number>(currents)
    const addCount = () => {
        if (current.value < max!)
            current.value = current.value + 1
    }
    const cutCount = () => {
        if (current.value > min!) {
            current.value = current.value - 1
        }
    }
    const setCount = (setNum: number) => {
        current.value = setNum
    }
    return { current, addCount, cutCount, setCount }
}
