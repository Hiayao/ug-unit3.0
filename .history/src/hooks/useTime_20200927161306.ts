import { ref, onUnmounted, onMounted } from 'vue'
import dayjs from "dayjs"

export const useTime = () => {
    let time = ref(dayjs().format('YYYY-MM-DD,HH:mm:ss'))
    let timer: any = null
    onMounted(() => {
        timer = setInterval(() => {
             time.value = dayjs().format('YYYY-MM-DD,HH:mm:ss')
        }, 1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        time
    }
}