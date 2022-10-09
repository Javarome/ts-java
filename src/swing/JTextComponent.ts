import {JComponent} from "./JComponent"

export class JTextComponent extends JComponent {

  protected value = ""

  getText(): string {
    return this.value
  }
}
