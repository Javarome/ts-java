import {PersistenceDelegate} from "beans/PersistenceDelegate"

export class Encoder {

  private readonly persistenceDelegates: { [className: string]: PersistenceDelegate } = {}

  writeObject(o: object) {
    const className = o.constructor.name
    const info = this.getPersistenceDelegate(className)
    info.writeObject(o, this)
  }

  getPersistenceDelegate(type: string): PersistenceDelegate {
    return this.persistenceDelegates[type]
  }

  setPersistenceDelegate(type: string, delegate: PersistenceDelegate): void {
    this.persistenceDelegates[type] = delegate
  }
}
