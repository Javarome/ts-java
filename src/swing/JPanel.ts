import {JComponent} from "swing/JComponent"
import {LayoutManager} from "swing/LayoutManager"
import {BorderLayout} from "swing/BorderLayout"

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
