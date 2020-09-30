import { ref, onMounted } from 'vue'

export const useCount = (currents = 0, min?: number,) => {
    let current = ref<number>(currents)
    const addCount = (max?: number) => {
        if (max) {
            if (current.value < max!)
                current.value = current.value + 1
        }
        else {
            current.value = current.value + 1
        }

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
