import {Serializable} from "../io/Serializable"
import {Cloneable} from "../lang/Cloneable"
import {Dictionary} from "util/Dictionary"
import {HashMap} from "util/HashMap"

export class Hashtable<K = any, V = any> implements Dictionary, Cloneable, Serializable {

  readonly _map = new HashMap<K, V>()

  get(key: K): V {
    return this._map.get(key) as V
  }

  put(key: K, value: V): V | undefined {
    const existing = this._map.get(key)
    this._map.put(key, value)
    return existing
  }

  isEmpty(): boolean {
    return this._map.isEmpty()
  }

  remove(key: K): V {
    return this._map.remove(key)
  }

  size(): number {
    return this._map.size()
  }
}
