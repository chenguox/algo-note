import IList from './IList'

interface IQueud<T> extends IList<T>{
  // 入队方法
  enqueue(element: T): void
  // 出队方法
  dequeue(): T | undefined
  // // 获取最后入队的元素
  // peek(): T | undefined
  // // 判断是否为空
  // isEmpty(): boolean
  // // 获取队列长度
  // size(): number
}

export default IQueud;
