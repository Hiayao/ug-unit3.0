import { ref, onMounted } from 'vue'
import { addCount } from './../../.history/src/hooks/usecount_20200927135901';

export const useAddCount = () => {
    let num = ref<number>(0)
    const addCount = () => {
        num.value = num.value + 1
    }
    return { addCount }
}
