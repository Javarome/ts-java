import {LayoutManager} from "awt/LayoutManager"
import {JComponent} from "swing/JComponent"

export class BorderLayout implements LayoutManager {
  static NORTH = "NORTH"
  static CENTER = "CENTER"

  putConstraint(_direction: string, _comp: JComponent, _num: number, _dir2: string, _comp2: JComponent): void {
  }
}
