import {Closable} from "io/Closable"
import {Flushable} from "io/Flushable"

/**
 * This abstract class is the superclass of all classes representing an output stream of bytes. An output stream accepts output bytes and sends them to some sink.
 * <br/>
 * Applications that need to define a subclass of OutputStream must always provide at least a method that writes one byte of output.
 *
 * @since 1.0
 */
export abstract class OutputStream implements Closable, Flushable {

  abstract write(data: any): void

  flush(): void {
  }

  close(): void {
    this.flush()
  }
}
