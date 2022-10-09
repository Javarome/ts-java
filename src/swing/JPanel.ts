import {JComponent} from "./JComponent"
import {LayoutManager} from "../awt/LayoutManager"
import {BorderLayout} from "../awt/BorderLayout"

export class JPanel extends JComponent {

  protected components: JComponent[] = []
  protected layout: LayoutManager = new BorderLayout()

  add(comp: JComponent) {
    this.components.push(comp)
  }

  setLayout(layout: LayoutManager) {
    this.layout = layout
  }
}
