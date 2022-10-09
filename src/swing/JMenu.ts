import {JMenuItem} from "swing/JMenuItem"
import {JComponent} from "swing/JComponent"

export class JMenu extends JComponent {

  private items: (JMenuItem | JMenu)[] = []

  constructor(name?: string) {
    super(name)
  }

  add(item: JMenuItem | JMenu): void {
    this.items.push(item)
  }
}
