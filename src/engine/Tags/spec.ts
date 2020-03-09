import Tag from "~/engine/Tag"
import Tags from "."

describe("Tags", () => {
  it("可以创建Tags", () => {
    const tags = new Tags()

    expect(tags.length()).toBe(0)
  })
  it("可以添加子Tag", () => {
    const tags = new Tags()
    const subTag1 = new Tag("one")
    const subTag2 = new Tag("two")

    tags.add(subTag1).add(subTag2)
    expect(tags.length()).toBe(2)
  })
  it.only("可以删除子Tag", () => {
    const tags = new Tags()
    const subTag1 = new Tag("one")
    const subTag2 = new Tag("two")

    tags
      .add(subTag1)
      .add(subTag2)
      .remove(subTag1)

    expect(tags.length()).toBe(1)

    tags.remove(subTag1)
    expect(tags.length()).toBe(1)

    tags.remove(subTag2)
    expect(tags.length()).toBe(0)
  })
  it.only("可以清除所有的子Tag", () => {
    const tags = new Tags()
    const subTag1 = new Tag("one")
    const subTag2 = new Tag("two")

    tags
      .add(subTag1)
      .add(subTag2)
      .clear()

    expect(tags.length()).toBe(0)
  })
})
