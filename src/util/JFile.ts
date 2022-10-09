import * as fs from "fs"
import {readdirSync} from "fs"

export class JFile {

  constructor(private pathname: string) {
  }

  getAbsolutePath(): string {
    return process.cwd() + this.pathname
  }

  exists(): boolean {
    return fs.existsSync(this.pathname)
  }

  list(): string[] {
    return readdirSync(this.pathname)
  }
}
