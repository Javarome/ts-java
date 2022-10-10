/**
 * <p>The Dictionary class is the abstract parent of any class, such as Hashtable, which maps keys to values. Every
 * key and every value is an object. In any one Dictionary object, every key is associated with at most one value.
 * Given a Dictionary and a key, the associated element can be looked up. Any non-null object can be used as a key
 * and as a value.</p>
 * <p>As a rule, the equals method should be used by implementations of this class to decide if two keys are the
 * same.</p>
 *
 * @deprecated This class is obsolete. New implementations should implement the Map interface, rather than extending this
 * class.
 *
 * @since 1.0
 */
export interface Dictionary<K = any, V = any> {

  get(key: K): V

  put(key: K, value: V): V | undefined

  remove(key: K): V

  size(): number

  isEmpty(): boolean
}
