import DateTime from "~/engine/DateTime"
import Repeat from "."

describe("Repeat", () => {
  const time = "2020/02/24 20:55:36"
  const date = new Date(time)
  const dt = new DateTime(date.valueOf())

  describe("MinuteRepeat", () => {
    it("在基类中创建子类", () => {
      const minute = Repeat.minute(dt)
      expect(minute.next(1).toString()).toBe("2020/02/24 20:56:36")
    })
    it("next() 操作过后不改变原始repeat对象", () => {
      const minute = Repeat.minute(dt)
      minute.next(42)
      expect(minute.toString()).toBe(time)
    })
  })
})
