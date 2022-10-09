import {Container} from "../awt/Container"

export class JComponent extends Container {

  constructor(public contents?: any) {
    super()
  }

  requestFocusInWindow(): boolean {
    return true
  }
}
