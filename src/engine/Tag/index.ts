/*
 * Guangyao Li
 * 2020/02/23
 * lgy87@foxmail.com
 */
import type { ID } from "~/engine/types"
import uuid from "~/utils/uuid"

export default class Tag {
  #ID: ID
  #name: string
  #parent: Tag = Tag.nil
  #children: Array<Tag> = []

  private static nil = new Tag("")

  constructor(name: string, parent: Tag = Tag.nil) {
    this.#ID = uuid({prefix: "TAG_"})
    this.#name = name
    this.#parent = parent

    if (Tag.isNotNil(this.#parent)) {
      this.#parent.add(this)
    }
  }
  ID() {
    return this.#ID
  }
  name() {
    return this.#name
  }
  parent() {
    return this.#parent
  }
  add(child: Tag) {
    if (this.children().includes(child)) return

    this.children().push(child)
  }
  eq(other: Tag) {
    return this.name() === other.name()
  }
  hasChild(son: Tag) {
    return this.children().includes(son)
  }
  children() {
    return this.#children
  }
  private static isNotNil(tag: Tag) {
    return tag !== Tag.nil
  }
}
