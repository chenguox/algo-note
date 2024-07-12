import IList from "./IList";

interface ILinkedList<T> extends IList<T> {
  append(value: T): void

}