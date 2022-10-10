import {OutputStream} from "./OutputStream"

/**
 * This class is the superclass of all classes that filter output streams. These streams sit on top of an already existing output stream (the underlying output stream) which it uses as its basic sink of data, but possibly transforming the data along the way or providing additional functionality.
 *
 * The class FilterOutputStream itself simply overrides all methods of OutputStream with versions that pass all requests to the underlying output stream. Subclasses of FilterOutputStream may further override some of these methods as well as provide additional methods and fields.
 *
 * @since 1.0
 */
export class FilterOutputStream extends OutputStream {

  constructor(protected out: OutputStream) {
    super()
  }

  write(data: any): void {
    this.out.write(data)
  }
}
