import {LayoutManager} from "./LayoutManager"
import {Component} from "./Component"

export enum SpringLayoutDirection {
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
  NORTH = "NORTH"
}

export class SpringLayout implements LayoutManager {

  putConstraint(_direction: SpringLayoutDirection, _comp: Component, _num: number, _dir2: SpringLayoutDirection,
                _comp2: Component): void {
  }
}
