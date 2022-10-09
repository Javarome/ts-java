import {JFrame} from "swing/JFrame"

describe("JFrame", () => {

  test("init", () => {
    const frame = new JFrame("test frame")
    expect(frame).toBeDefined()
  })
})
