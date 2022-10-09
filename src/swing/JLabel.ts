import {JComponent} from "swing/JComponent"

export class JLabel extends JComponent {

  constructor(protected text: string) {
    super()
  }
}
