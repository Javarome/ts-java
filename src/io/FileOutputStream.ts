import {OutputStream} from "./OutputStream"
import * as fs from "fs"

export class FileOutputStream extends OutputStream {

  constructor(protected name: string) {
    super()
  }

  write(data: any): void {
    fs.writeFileSync(this.name, data)
  }
}
