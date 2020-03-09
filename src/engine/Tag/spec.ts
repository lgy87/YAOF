import * as r from "ramda"
import Tag from "."

describe.only("Tag", () => {
  it("可以创建Tag", () => {
    const name = "this is a tag"
    const tag = new Tag(name)

    expect(tag.name()).toBe(name)
  })
  it("可以建立Tag父子关系", () => {
    const parent = new Tag("parent")
    const son = new Tag("son", parent)

    expect(son.parent()).toBe(parent)
  })
  it("可以查看是不是某个Tag的子Tag", () => {
    const parent = new Tag("parent")
    const son = new Tag("son", parent)
    const son2 = new Tag("son2", parent)

    expect(parent.hasChild(son)).toBeTruthy()
    expect(parent.hasChild(son2)).toBeTruthy()
  })
  it("获取Tag的全部子Tags", () => {
    const parent = new Tag("parent")
    new Tag("son", parent)
    new Tag("son2", parent)

    expect(parent.children().length()).toBe(2)
  })
  it("子tag是唯一的", () => {
    const parent = new Tag("parent")
    const son = new Tag("son")
    parent.add(son)
    parent.add(son)

    expect(parent.children().length()).toBe(1)
  })
  it("可以正常json化", () => {
    const name = "this is a tag!"
    const tag = new Tag(name)

    expect(r.whereEq({ name, children: [] }, tag.toJSON())).toBe(true)
  })
})
