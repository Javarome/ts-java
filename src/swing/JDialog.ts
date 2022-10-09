import {JFrame} from "swing/JFrame"
import {JWindow} from "awt/JWindow"

export enum JDialogResult {
  APPROVE_OPTION,
  OK_OPTION,
  CANCEL_OPTION,
}

export class JDialog extends JWindow {

  constructor(protected parent: JFrame, protected modal: boolean) {
    super()
  }
}
