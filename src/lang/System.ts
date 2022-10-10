import {Properties} from "../util"

export class System {

  private static readonly properties = new Properties()

  static {
    System.setProperty("java.version", "1.9.0-ts")
  }

  static getProperty(key: string): string | null {
    return this.properties.getProperty(key)
  }

  static setProperty(key: string, value: string) {
    System.properties.setProperty(key, value)
  }
}
