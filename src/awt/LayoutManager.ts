import {Component} from "./Component"

export interface LayoutManager {
  putConstraint(_direction: string, _comp: Component, _num: number, _dir2: string, _comp2: Component): void
}
