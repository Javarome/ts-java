import * as os from "os"
import {MacOSPreferences} from "./MacOSPreferences"

export class Preferences {

  private readonly map = new Map<string, any>()

  static userNodeForPackage(obj: any): Preferences {
    const className = obj.constructor.name
    switch (os.platform()) {
      case "darwin":
        return new MacOSPreferences(className)
      default:
        throw Error("Unsupported plaform")
    }
  }

  flush() {
  }

  get(key: string, defaultValue: string) {
    let value = this.map.get(key)
    if (!value) {
      value = defaultValue
    }
    return value
  }
}
