import * as r from "ramda"
import * as ra from "ramda-adjunct"
import Tag from "~/engine/Tag"

export default class Tags {
  #items?: Array<Tag>

  add(tag: Tag) {
    if (!this.#items) {
      this.#items = []
    }

    if (!this.#items.includes(tag)) {
      this.#items.push(tag)
    }

    return this
  }
  remove(tag: Tag) {
    if (!this.#items) {
      return this
    }

    this.#items = r.reject(r.identical(tag), this.#items)
    return this
  }
  clear() {
    this.#items = undefined

    return this
  }
  has(tag: Tag) {
    if (!this.#items) return false

    return this.#items.includes(tag)
  }
  length() {
    // TODO: 改成 ?. 和 ?? (目前 jest还不支持)
    if (!this.#items) return 0

    return this.#items.length
  }
  toJSON():any {
    if (!this.#items) return []
    if (ra.lengthEq(0, this.#items)) return []

    return this.#items.map(tag => tag.toJSON())
  }
}
