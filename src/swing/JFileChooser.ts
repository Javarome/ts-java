import {FileFilter} from "io/FileFilter"
import {JFrame} from "./JFrame"
import {JDialogResult} from "./JDialog"
import {JFile} from "../io/JFile"

export class JFileChooser {

  protected filter: FileFilter | undefined
  private selectedFile: JFile | undefined

  setFileFilter(filter: FileFilter) {
    this.filter = filter
  }

  async showOpenDialog(_parentFrame: JFrame): Promise<JDialogResult> {
    return new Promise((resolve, _reject) => {
      const input = document.createElement("input")
      input.type = 'file';
      input.onchange = (e => {
        this.selectedFile = new JFile((e.target as any).files[0])
        resolve(JDialogResult.APPROVE_OPTION)
      })
      input.click();
    })
  }

  getSelectedFile(): JFile | undefined {
    return this.selectedFile
  }
}
