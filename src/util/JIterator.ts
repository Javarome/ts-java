export class JIterator<T> {

  constructor(private iterator: Iterator<T>) {
  }

  hasNext(): boolean {
    return !this.iterator.next().done
  }

  next(): T {
    if (this.hasNext()) {
      return this.iterator.next().value
    } else {
      throw new Error("No more items")
    }
  }
}
