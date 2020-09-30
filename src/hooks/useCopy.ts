export const useCopy = (value: string) => {
    let oInput = document.createElement('input') // 生成一个节点
    oInput.value = value  // 你要复制的文本
    document.body.appendChild(oInput) // 插入文档
    oInput.select() // 选择对象
    document.execCommand("Copy") // 执行浏览器复制命令
    document.body.removeChild(oInput) //移除标签
}