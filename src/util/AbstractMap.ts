import {JEntry, JMap} from "./JMap"
import {JIterator} from "./JIterator"

export abstract class AbstractMap<K = any, V = any> implements JMap<K, V> {

  abstract entries(): JIterator<JEntry<K, V>>

  abstract get(key: K): V

  abstract put(key: K, value: V): V | undefined

  abstract isEmpty(): boolean

  abstract remove(key: K): V

  abstract size(): number
}
