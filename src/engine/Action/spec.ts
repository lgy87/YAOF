import Action from "."

describe("action", () => {
  it("可以创建Action实例", () => {
    const title = "11:30AM去吃饭"
    const action = new Action(title)

    expect(action.title()).toBe(title)
    expect(action.createdAt()).toBeDefined()
    expect(action.updatedAt()).toBeUndefined()
    expect(action.deletedAt()).toBeUndefined()
    expect(action.note()).toBeUndefined()
    expect(action.flagged()).toBe(false)
  })
})
