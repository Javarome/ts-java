import {Dimension} from "awt/Dimension"
import {Point} from "awt/Point"
import {Container} from "awt/Container"

export class JWindowEvent {
  static WINDOW_CLOSING = "0"

  constructor(private id: string) {
  }

  getID(): string {
    return this.id
  }
}

export class JWindow extends Container {

  private size: Dimension = new Dimension(800, 600)
  private location = new Point()

  pack(): void {
  }

  dispose(): void {
  }

  getSize(): Dimension {
    return this.size
  }

  setLocation(x: number, y: number) {
    this.location = new Point(x, y)
  }

  getLocation(): Point {
    return this.location
  }
}
