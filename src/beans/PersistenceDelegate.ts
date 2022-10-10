import {Encoder} from "beans/Encoder"

export abstract class PersistenceDelegate {

  protected constructor() {
  }

  writeObject(oldInstance: object, encoder: Encoder) {

  }
}
