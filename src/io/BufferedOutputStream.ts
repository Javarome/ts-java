import {OutputStream} from "./OutputStream"
import {FilterOutputStream} from "io/FilterOutputStream"
import {IllegalArgumentException} from "lang/IllegalArgumentException"

/**
 * The class implements a buffered output stream. By setting up such an output stream, an application can write bytes to the underlying output stream without necessarily causing a call to the underlying system for each byte written.
 */
export class BufferedOutputStream extends FilterOutputStream {

  protected buf: Buffer
  protected count = 0

  constructor(out: OutputStream, size = 8192) {
    super(out)
    if (size <= 0) {
      throw new IllegalArgumentException("Buffer size <= 0")
    }
    this.buf = new Buffer(size)
  }

  write(data: any): void {
    const toWrite = Buffer.from(data)
    if (this.count >= this.buf.length) {
      this.flushBuffer()
    }
    this.buf.write(toWrite.toString(), this.count, toWrite.length)
    this.count += toWrite.length
  }

  flush() {
    this.flushBuffer()
  }

  private flushBuffer() {
    if (this.count > 0) {
      this.out.write(this.buf.subarray(0, this.count))
      this.count = 0
    }
  }
}
