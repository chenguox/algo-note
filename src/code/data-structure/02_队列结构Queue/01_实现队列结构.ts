import IQueud from "../../interface/IQueue";

class ArrayQueue<T> implements IQueud<T> {
  private data: T[] = []

  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
}

const queue = new ArrayQueue<string>()

queue.enqueue('abc')
queue.enqueue('cba')
queue.enqueue('nba')

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.peek())

console.log(queue.isEmpty())
console.log(queue.size())


export default ArrayQueue