import {JIterator} from "./JIterator"

export interface JEntry<K = any, V = any> {
  getKey(): K

  getValue(): V
}

export interface JMap<K = any, V = any> {

  entries(): JIterator<JEntry<K, V>>

  get(key: K): V

  put(key: K, value: V): V | undefined

  remove(key: K): V

  size(): number

  isEmpty(): boolean
}
