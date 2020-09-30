import { ref, onMounted } from 'vue'

// currents为初始值，默认为0
// min为最小值，当小于min就不能再进行减
// max为最大值，当大于max就不能再进行加
// varNum为每次加减的变量，默认为1

export const useCount = (currents = 0,) => {
	let current = ref<number>(currents)
	// let varNum = ref<number>(varNums)
	const addCount = (max?: number,varNum = 1) => {
		if (max) {
			if (current.value < max!)
				current.value = current.value + varNum
		}
		else {
			current.value = current.value + varNum
		}

	}
	const cutCount = (min?: number,varNum = 1) => {
		if (min) {
			if (current.value > min!) {
				current.value = current.value - varNum
			}
		}
		else {
			current.value = current.value - varNum
		}

	}
	const setCount = (setNum: number) => {
		current.value = setNum
	}
	return { current, addCount, cutCount, setCount }
}
