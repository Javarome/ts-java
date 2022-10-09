import {JComponent} from "./JComponent"
import {JMenu} from "./JMenu"

export class JMenuBar extends JComponent {

  constructor(private menus: JMenu[] = []) {
    super()
  }

  getMenuCount(): number {
    return this.menus.length
  }

  add(menu: JMenu, index = this.menus.length): void {
    this.menus = this.menus.splice(index, 0, menu)
  }

  remove(menuIndex: number) {
    this.menus = this.menus.splice(menuIndex, 1)
  }
}
