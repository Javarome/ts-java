import {GraphicsConfiguration} from "./GraphicsConfiguration"
import {FocusListener} from "./FocusListener"
import {MouseListener} from "./MouseListener"
import {Font} from "./Font"
import {Color} from "./Color"

export class Component {

  private font: Font = Font.DEFAULT
  private background: Color = Color.GRAY

  getGraphicsConfiguration(): GraphicsConfiguration {
    return null!
  }

  addFocusListener(_listener: FocusListener) {

  }

  addMouseListener(_listener: MouseListener) {
  }

  getBackground(): Color {
    return this.background
  }

  getFont(): Font {
    return this.font
  }

  setFont(font: Font) {
    this.font = font
  }
}
