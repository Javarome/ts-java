import {JEntry, JMap} from "util/JMap"
import {JIterator} from "util/JIterator"

export class HashMap<K = any, V = any> implements JMap<K, V> {
  readonly _map = new Map<K, V>()

  entries(): JIterator<JEntry<K, V>> {
    const entries = this._map.entries()
    const subIt = new class implements Iterator<JEntry<K, V>> {
      next(): IteratorResult<JEntry<K, V>> {
        let next = entries.next()
        const [k, v] = next.value
        return {
          done: next.done,
          value: new class implements JEntry<K, V> {
            getKey = (): K => k
            getValue = (): V => v
          }
        }
      }
    }
    return new JIterator<JEntry<K, V>>(subIt)
  }

  get(key: K): V {
    return this._map.get(key) as V
  }

  put(key: K, value: V): V | undefined {
    const existing = this._map.get(key)
    this._map.set(key, value)
    return existing
  }
}
