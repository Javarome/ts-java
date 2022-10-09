import {ActionEvent} from "../awt/event/ActionEvent"

export interface Action {
  actionPerformed(event: ActionEvent): void

  setEnabled(enabled: boolean): void
}
