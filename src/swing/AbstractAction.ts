import {Action} from "./Action"
import {ActionEvent} from "../awt/event/ActionEvent"

export abstract class AbstractAction implements Action {

  private _enabled = true

  protected constructor(protected name?: string) {
  }

  setEnabled(enabled: boolean): void {
    this._enabled = enabled
  }

  isEnabled(): boolean {
    return this._enabled
  }

  abstract actionPerformed(event: ActionEvent): void
}
