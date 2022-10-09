import {JFile} from "util/JFile"

export class FileFilter {

  accept(_f: JFile): boolean {
    return true
  }

  getDescription(): string {
    return ""
  }
}
