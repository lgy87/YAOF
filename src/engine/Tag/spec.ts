import Tag from "."

describe("Tag", () => {
  it("可以创建Tag", () => {
    const name = "this is a tag"
    const tag = new Tag(name)

    expect(tag.name()).toBe(name)
  })
  it("可以比较Tag是否相等", () => {
    const name = "this is a tag"
    const tag = new Tag(name)
    const tag2 = new Tag(name)

    expect(tag.eq(tag2)).toBeTruthy()
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

    expect(parent.children()).toHaveLength(2)
  })
  it("子tag是唯一的", () => {
    const parent = new Tag("parent")
    const son = new Tag("son")
    parent.add(son)
    parent.add(son)

    expect(parent.children()).toHaveLength(1)
  })
})
