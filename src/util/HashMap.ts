import {JEntry} from "./JMap"
import {JIterator} from "./JIterator"
import {AbstractMap} from "./AbstractMap"
import {Serializable} from "../io/Serializable"
import {Cloneable} from "../lang/Cloneable"

export class HashMap<K = any, V = any> extends AbstractMap<K, V> implements Serializable, Cloneable {

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

  size(): number {
    return this._map.size
  }

  isEmpty(): boolean {
    return this.size() <= 0
  }

  remove(key: K): V {
    const previous = this.get(key)
    this._map.delete(key)
    return previous
  }
}
