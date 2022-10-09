import {JComponent} from "../JComponent"
import {TreePath} from "./TreePath"
import {TreeModel} from "./TreeModel"
import {TreeCellRenderer} from "./TreeCellRenderer"
import {TreeNode} from "./TreeNode"
import {DefaultTreeCellRenderer} from "./DefaultTreeCellRenderer"

export class JTree<T = any> extends JComponent {

  private cellRenderer: TreeCellRenderer = new DefaultTreeCellRenderer()

  constructor(private model: TreeModel) {
    super()
  }

  getCellRenderer(): TreeCellRenderer {
    return this.cellRenderer
  }

  makeVisible(_path: TreePath) {
  }

  setShowsRootHandles(_b: boolean) {
  }

  putClientProperty(_lineStyle: string, _angled: string) {
  }

  removeAll() {
    this.model.removeAll()
  }

  getPathForLocation(_x: number, _y: number): TreePath {
    return null!
  }

  setCellRenderer(renderer: TreeCellRenderer) {
    this.cellRenderer = renderer
  }

  getLastSelectedPathComponent(): TreeNode<T> {
    return null!
  }
}
