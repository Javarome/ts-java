import {Hashtable} from "./Hashtable"

export class Properties extends Hashtable<any, any> {

  getProperty(name: string, defaultValue: string | null = null): string | null {
    return this.get(name) as string || defaultValue
  }

  setProperty(name: string, value: string): string | null {
    const previous = this.getProperty(name)
    this.put(name, value)
    return previous
  }
}
