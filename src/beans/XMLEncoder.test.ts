import {XMLEncoder} from "beans/XMLEncoder"
import {FileOutputStream} from "io/FileOutputStream"
import {BufferedOutputStream} from "io"

describe("XMLEncoder", function () {

  test("init", () => {
    const obj = {
      strProp: "str value",
      numProp: 12,
      objProp: {
        x: 13,
        y: "str"
      }
    }
    const outputStream = new BufferedOutputStream(new FileOutputStream("test.xml"))
    const xmlEncoder = new XMLEncoder(outputStream)
    try {
      xmlEncoder.writeObject(obj)
    } finally {
      xmlEncoder.close()
    }
  })
})
