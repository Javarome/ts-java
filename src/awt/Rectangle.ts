import {Dimension} from "./Dimension"
import {Point} from "./Point"

export class Rectangle {

  constructor(private location: Point, private dimension: Dimension) {
  }

  getCenterX(): number {
    return this.location.getX() + this.dimension.getWidth() / 2
  }

  getCenterY(): number {
    return this.location.getY() + this.dimension.getWidth() / 2
  }
}
