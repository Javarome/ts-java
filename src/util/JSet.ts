export interface JSet<T = any> extends Iterable<T> {

  isEmpty(): boolean

  add(item: T): void

  size(): number
}
