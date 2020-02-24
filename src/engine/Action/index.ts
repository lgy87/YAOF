/*
 * Guangyao Li
 * 2020/02/23
 * lgy87@foxmail.com
 */
import Tag from "~/engine/Tag"
import type { ID } from "~/engine/types"
import uuid from "~/utils/uuid"

export default class Action {
  #ID: ID
  #title: string
  #note: string = ""
  #flagged: boolean = false
  #parent: Action = Action.nil
  #children: Array<Action> = []
  #tags: Array<Tag> = []

  private static nil = new Action("")

  constructor(title: string, parent: Action = Action.nil) {
    this.#ID =uuid({prefix: "ACTION_"})
    this.#title = title

    this.#parent = parent

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
  note(note?: string) {
    if (typeof note === "string") {
      this.#note = note
      return this
    }

    return this.#note
  }
  private static isNotNil(other: Action) {
    return other !== Action.nil
  }
}
