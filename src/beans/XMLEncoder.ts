import {Encoder} from "./Encoder"
import {OutputStream} from "../io/OutputStream"
import {AutoCloseable} from "../lang/AutoCloseable"
import {System} from "lang/System"

/**
 * <p>The XMLEncoder class is a complementary alternative to the ObjectOutputStream and can used to generate a textual
 * representation of a JavaBean in the same way that the ObjectOutputStream can be used to create binary
 * representation of Serializable objects. For example, the following fragment can be used to create a textual
 * representation the supplied JavaBean and all its properties:</p>
 * <pre>
 *        XMLEncoder e = new XMLEncoder(
 *                           new BufferedOutputStream(
 *                               new FileOutputStream("Test.xml")));
 *        e.writeObject(new JButton("Hello, world"));
 *        e.close();
 * </pre>
 * <p>Despite the similarity of their APIs, the XMLEncoder class is exclusively designed for the purpose of archiving
 * graphs of JavaBeans as textual representations of their public properties. Like Java source files, documents
 * written this way have a natural immunity to changes in the implementations of the classes involved. The
 * ObjectOutputStream continues to be recommended for interprocess communication and general purpose serialization.</p>
 * <p>The XMLEncoder class provides a default denotation for JavaBeans in which they are represented as XML documents
 * complying with version 1.0 of the XML specification and the UTF-8 character encoding of the Unicode/ISO 10646
 * character set. The XML documents produced by the XMLEncoder class are:</p>
 * <ul>
 * <li><em>Portable and version resilient</em>: they have no dependencies on the private implementation of any class
 * and so, like Java source files, they may be exchanged between environments which may have different versions of some of
 * the classes and between VMs from different vendors.</li>
 * <li><em>Structurally compact</em>: The XMLEncoder class uses a redundancy elimination algorithm internally so
 * that the default values of a Bean's properties are not written to the stream.</li>
 * <li><em>Fault tolerant</em>: Non-structural errors in the file, caused either by damage to the file or by API changes
 * made to classes in an archive remain localized so that a reader can report the error and continue to load the parts of
 * the document which were not affected by the error.</li>
 * </ul>
 * <p>Below is an example of an XML archive containing some user interface components from the swing toolkit:</p>
 *
 *  <?xml version="1.0" encoding="UTF-8"?>
 *  <java version="1.0" class="java.beans.XMLDecoder">
 *  <object class="javax.swing.JFrame">
 *    <void property="name">
 *      <string>frame1</string>
 *    </void>
 *    <void property="bounds">
 *      <object class="java.awt.Rectangle">
 *        <int>0</int>
 *        <int>0</int>
 *        <int>200</int>
 *        <int>200</int>
 *      </object>
 *    </void>
 *    <void property="contentPane">
 *      <void method="add">
 *        <object class="javax.swing.JButton">
 *          <void property="label">
 *            <string>Hello</string>
 *          </void>
 *        </object>
 *      </void>
 *    </void>
 *    <void property="visible">
 *      <boolean>true</boolean>
 *    </void>
 *  </object>
 *  </java>
 *
 * The XML syntax uses the following conventions:
 * Each element represents a method call.
 * The "object" tag denotes an expression whose value is to be used as the argument to the enclosing element.
 * The "void" tag denotes a statement which will be executed, but whose result will not be used as an argument to the enclosing method.
 * Elements which contain elements use those elements as arguments, unless they have the tag: "void".
 * The name of the method is denoted by the "method" attribute.
 * XML's standard "id" and "idref" attributes are used to make references to previous expressions - so as to deal with circularities in the object graph.
 * The "class" attribute is used to specify the target of a static method or constructor explicitly; its value being the fully qualified name of the class.
 * Elements with the "void" tag are executed using the outer context as the target if no target is defined by a "class" attribute.
 * Java's String class is treated specially and is written <string>Hello, world</string> where the characters of the string are converted to bytes using the UTF-8 character encoding.
 * Although all object graphs may be written using just these three tags, the following definitions are included so that common data structures can be expressed more concisely:
 *
 * The default method name is "new".
 * A reference to a java class is written in the form <class>javax.swing.JButton</class>.
 * Instances of the wrapper classes for Java's primitive types are written using the name of the primitive type as the tag. For example, an instance of the Integer class could be written: <int>123</int>. Note that the XMLEncoder class uses Java's reflection package in which the conversion between Java's primitive types and their associated "wrapper classes" is handled internally. The API for the XMLEncoder class itself deals only with Objects.
 * In an element representing a nullary method whose name starts with "get", the "method" attribute is replaced with a "property" attribute whose value is given by removing the "get" prefix and decapitalizing the result.
 * In an element representing a monadic method whose name starts with "set", the "method" attribute is replaced with a "property" attribute whose value is given by removing the "set" prefix and decapitalizing the result.
 * In an element representing a method named "get" taking one integer argument, the "method" attribute is replaced with an "index" attribute whose value the value of the first argument.
 * In an element representing a method named "set" taking two arguments, the first of which is an integer, the "method" attribute is replaced with an "index" attribute whose value the value of the first argument.
 * A reference to an array is written using the "array" tag. The "class" and "length" attributes specify the sub-type of the array and its length respectively.
 * For more information you might also want to check out Using XMLEncoder, an article in The Swing Connection.
 */
export class XMLEncoder extends Encoder implements AutoCloseable {

  private preambleWritten = false
  private indentChar = " "
  private indents = 0

  constructor(private out: OutputStream, private charset = "UTF-8", private declaration = true,
              private indentation = 2) {
    super()
  }

  writeObject(o: any) {
    if (o) {
      if (typeof o == "object") {
        this.writeln(`<object class="${o.constructor.name}">`)
        this.indents++
        for (const f in o) {
          this.writeln(`<void property="${f}">`)
          this.indents++
          const tagEnd = `${typeof f}>`
          this.writeObject(o[f])
          this.indents--
          this.writeln(`</void>`)
        }
        this.indents--
        this.writeln("</object>")
      } else {
        const primitiveType = typeof o === "number" ? "int" : typeof o
        const tagEnd = primitiveType + ">"
        this.writeln(`<${tagEnd}${o}</${tagEnd}`)
      }
    } else {
      this.writeln("</null>")
    }
  }

  /**
   * This method calls flush, writes the closing postamble and then closes the output stream associated with this stream.
   */
  close(): void {
    this.flush()
    this.out.close()
  }

  /**
   * This method writes out the preamble associated with the XML encoding if it has not been written already and then writes out all of the values that been written to the stream since the last time flush was called.
   */
  flush(): void {
    this.writeln("</java>")
    this.out.flush()
  }

  private writeln(exp: string) {
    if (!this.preambleWritten) { // Don't do this in constructor - it throws ... pending.
      if (this.declaration) {
        this.indent()
        this.out.write(`<?xml version="1.0" encoding="${this.charset}"?>\n`)
      }
      const className = `java.beans.${this.constructor.name}`
      this.indent()
      this.out.write(`<java version="${System.getProperty("java.version")}" class="${className}">\n`)
      this.preambleWritten = true
    }
    this.indent()
    this.out.write(exp + "\n")
  }

  private indent() {
    this.out.write(this.indentChar.repeat(this.indentation * this.indents))
  }
}
