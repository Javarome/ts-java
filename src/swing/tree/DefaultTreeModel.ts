import {TreeModel} from "./TreeModel"
import {TreeNode} from "./TreeNode"
import {DefaultMutableTreeNode} from "./DefaultMutableTreeNode"

export class DefaultTreeModel<T = any> implements TreeModel {

  constructor(private root: TreeNode<T>) {
  }

  getRoot(): TreeNode<T> {
    return this.root
  }

  removeAll(): void {
    this.root = new DefaultMutableTreeNode(this.root.getUserObject())
  }

  reload() {
  }

  insertNodeInto(_node: TreeNode<T>, _root: TreeNode<T>, _childCount: number): void {
  }
}
