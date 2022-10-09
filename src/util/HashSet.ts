import {JSet} from "util/JSet"

export class HashSet<T = any> implements JSet<T> {
  private _set = new Set<T>();

  [Symbol.iterator](): Iterator<T> {
    return this._set[Symbol.iterator]()
  }

  isEmpty(): boolean {
    return this._set.size <= 0
  }

  add(item: T): void {
    this._set.add(item)
  }

  size(): number {
    return this._set.size
  }

  values(): IterableIterator<T> {
    return this._set.values()
  }

  addAll(set: JSet<T>): void {
    for (const s of set) {
      this.add(s)
    }
  }
}
