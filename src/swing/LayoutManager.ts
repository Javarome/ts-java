import {JComponent} from "swing/JComponent"

export interface LayoutManager {
  putConstraint(_direction: string, _comp: JComponent, _num: number, _dir2: string, _comp2: JComponent): void
}
