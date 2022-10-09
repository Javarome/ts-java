import {Component} from "./Component"

export class Container extends Component {

  private enabled = true
  private visible = true

  isVisible(): boolean {
    return this.visible
  }

  setVisible(value: boolean) {
    this.visible = value
  }

  setEnabled(b: boolean) {
    this.enabled = b
  }

  isEnabled(): boolean {
    return this.enabled
  }

  validate(): void {
  }
}
