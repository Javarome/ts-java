import {Collection} from "./Collection"

export interface JSet<E = any> extends Collection<E> {

  isEmpty(): boolean

  add(item: E): void

  size(): number
}
