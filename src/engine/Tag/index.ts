/*
 * Guangyao Li
 * 2020/02/23
 * lgy87@foxmail.com
 */
import Tags from "~/engine/Tags"
import type { ID } from "~/engine/types"
import uuid from "~/utils/uuid"

export default class Tag {
  #ID: ID
  #name: string
  #parent: Tag = Tag.nil
  #children: Tags

  private static nil = new Tag("")

  constructor(name: string, parent: Tag = Tag.nil) {
    this.#ID = uuid({prefix: "TAG_"})
    this.#name = name
    this.#parent = parent
    this.#children = new Tags()

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
    this.children().add(child)
  }
  hasChild(son: Tag) {
    return this.children().has(son)
  }
  children() {
    return this.#children
  }
  toJSON() {
    return {
      ID: this.ID(),
      name: this.name(),
      children: this.children().toJSON(),
    }
  }
  private static isNotNil(tag: Tag) {
    return tag !== Tag.nil
  }
}
