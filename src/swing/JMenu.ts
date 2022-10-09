import {JMenuItem} from "./JMenuItem"

export class JMenu extends JMenuItem {

  private items: (JMenuItem | JMenu)[] = []

  constructor(name?: string) {
    super(name)
  }

  add(item: JMenuItem | JMenu): void {
    this.items.push(item)
  }
}
