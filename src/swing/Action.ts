import {ActionEvent} from "awt/ActionEvent"

export interface Action {
  actionPerformed(event: ActionEvent): void

  setEnabled(enabled: boolean): void
}
