import {DefaultMutableTreeNode} from "swing"

describe("DefaultMutableTreeNode", () => {

  test("init", () => {
    const someObj = {}
    const node = new DefaultMutableTreeNode(someObj)
    expect(node.getChildCount()).toBe(0)
    expect(node.getUserObject()).toBe(someObj)
  })

  test("add", () => {
    const parentObj = {}
    const parentNode = new DefaultMutableTreeNode(parentObj)
    const childObj = {}
    const childNode = new DefaultMutableTreeNode(childObj)
    parentNode.add(childNode)
    expect(parentNode.getChildCount()).toBe(1)
  })
})
