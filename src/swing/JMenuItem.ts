import {Action} from "./Action"
import {ActionEvent} from "../awt/event/ActionEvent"
import {AbstractButton} from "./AbstractButton"

export class DefaultAction implements Action {

  private enabled = true

  constructor(protected text: string) {
  }

  actionPerformed(_event: ActionEvent): void {
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  isEnabled(): boolean {
    return this.enabled
  }
}

export class JMenuItem extends AbstractButton {

  private action?: Action

  constructor(action?: string | Action) {
    super()
    if (typeof action === "string") {
      this.action = new DefaultAction(action)
    } else {
      this.action = action
    }
  }
}
