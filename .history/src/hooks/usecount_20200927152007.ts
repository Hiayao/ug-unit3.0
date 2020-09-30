import { ref, onMounted } from 'vue'

export const useCount = (currents = 0) => {
    let current = ref<number>(currents)
    const addCount = () => {
        current.value = current.value + 1
    }
    const cutCount = () => {
        if (current.value > 0) {
            current.value = current.value - 1
        }
    }
    const setCount = (setNum: number) => {
        current.value = setNum
    }
    return { current, addCount, cutCount, setCount }
}
