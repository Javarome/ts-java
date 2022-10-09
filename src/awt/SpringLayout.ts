import {LayoutManager} from "awt/LayoutManager"
import {JComponent} from "swing/JComponent"

export enum SpringLayoutDirection {
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
  NORTH = "NORTH"
}

export class SpringLayout implements LayoutManager {

  putConstraint(_direction: SpringLayoutDirection, _comp: JComponent, _num: number, _dir2: SpringLayoutDirection, _comp2: JComponent): void {
  }
}
