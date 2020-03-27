/*
 * Guangyao Li
 * 2020/02/23
 * lgy87@foxmail.com
 */
import DateTime from "~/engine/DateTime"
import Tags from "~/engine/Tags"
import type { ID } from "~/engine/types"
import uuid from "~/utils/uuid"

export default class Action {
  #ID: ID
  #title: string
  #note?: string
  #flagged: boolean = false
  #parent: Action = Action.nil
  #children: Array<Action> = []
  #tags: Tags
  #createdAt: DateTime
  #updatedAt?: DateTime
  #deletedAt?: DateTime

  private static nil = new Action("")

  constructor(title: string, parent: Action = Action.nil) {
    this.#ID = uuid({prefix: "ACTION_"})
    this.#title = title

    this.#parent = parent
    this.#createdAt = new DateTime()
    this.#tags = new Tags()

    if (Action.isNotNil(this.#parent)) {
      this.#parent.add(this)
    }
  }
  ID() {
    return this.#ID
  }
  title() {
    return this.#title
  }
  add(child: Action) {
    this.#children.push()
  }
  flagged() {
    return this.#flagged
  }
  note(note?: string) {
    if (typeof note === "string") {
      this.#note = note
      return this
    }

    return this.#note
  }
  tags() {
    return this.#tags
  }
  createdAt() {
    return this.#createdAt
  }
  updatedAt() {
    return this.#updatedAt
  }
  deletedAt() {
    return this.#deletedAt
  }
  private static isNotNil(other: Action) {
    return other !== Action.nil
  }
}
