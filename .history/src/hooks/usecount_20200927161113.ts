import { ref, onUnmounted } from 'vue'

// currents为初始值，默认为0
// min为最小值，当小于min就不能再进行减
// max为最大值，当大于max就不能再进行加
// varNum为每次加减的变量，默认为1
// setNum为设置的值，点击后立马变为该值，默认为50

export const useCount = (currents = 0,) => {
	let current = ref<number>(currents)
	let addTime: any = null
	// 增加
	const addCount = (max?: number, varNum = 1) => {
		if (max) {
			if (current.value < max!)
				current.value = current.value + varNum
		}
		else {
			current.value = current.value + varNum
		}

	}
	// 减少
	const cutCount = (min?: number, varNum = 1) => {
		if (min) {
			if (current.value > min!) {
				current.value = current.value - varNum
			}
		}
		else {
			current.value = current.value - varNum
		}

	}
	// 设置
	const setCount = (setNum = 50) => {
		current.value = setNum!
	}
	// 重置
	const resetCount = () => {
		current.value = currents
	}
	// 延迟加
	const delayAddCount = (timer = 1000) => {
		addTime = setInterval(() => {
			addCount()
		}, timer)

	}
	onUnmounted(() => {
		clearTimeout(addTime)
	})
	return { current, addCount, cutCount, setCount, resetCount, delayAddCount }
}
