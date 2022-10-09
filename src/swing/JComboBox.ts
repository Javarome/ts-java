import {JComboBoxModel} from "swing/JComboBoxModel"
import {JComponent} from "swing/JComponent"
import {DefaultComboBoxModel} from "swing/DefaultComboBoxModel"

export class JComboBox<I = any> extends JComponent {

  private selectedItem: I | undefined

  constructor(protected model: JComboBoxModel = new DefaultComboBoxModel()) {
    super()
  }

  setSelectedItem(item: I) {
    this.selectedItem = item
  }

  getSelectedItem(): I | undefined {
    return this.selectedItem
  }

  setModel(model: JComboBoxModel) {
    this.model = model
  }
}
