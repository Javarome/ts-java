import {JComboBoxModel} from "./JComboBoxModel"

export class DefaultComboBoxModel<T = any> implements JComboBoxModel {

  protected elements: T[] = []

  getElementAt(index: number): T {
    return this.elements[index]
  }

  getSize(): number {
    return this.elements.length
  }
}
