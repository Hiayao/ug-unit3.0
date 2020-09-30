import { ref, onMounted } from 'vue'

export const useCount = (numDefault = 0) => {
    let current = ref<number>(0)
    const addCount = () => {
        current.value = current.value + 1
    }
    const cutCount = () => {
        if (numDefault > 0) {
            numDefault = numDefault - 1
        }
    }
    const setCount = () => {
        numDefault = 50
    }
    return { current, addCount, cutCount, setCount }
}
