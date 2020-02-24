import DateTime from "."

describe("DateTime", () => {
  it("可以创建DateTime类型的实例", () => {
    const time = "2020/02/24 20:55:36"
    const date = new Date(time)
    const dt = new DateTime(date.valueOf())

    expect(dt.toString()).toBe(time)
  })
  it("可以比较DateTime类型的实例的大小", () => {
    const time = "2020/02/24 20:55:36"
    const date = new Date(time)
    const past = new DateTime(date.valueOf())
    const now = new DateTime(Date.now())

    expect(past.lt(now)).toBeTruthy()
    expect(past.lte(now)).toBeTruthy()
    expect(now.gte(past)).toBeTruthy()
    expect(now.gt(past)).toBeTruthy()
    expect(past.gt(now)).toBeFalsy()
    expect(now.eq(now)).toBeTruthy()
  })
  describe("可以正常做计算", () => {
    const time = "2020/02/24 20:55:36"
    const date = new Date(time)
    const dt = new DateTime(date.valueOf())

    it("计算后返回新的实例", () => {
      dt.addMinutes(1)
      expect(dt.toString()).toBe("2020/02/24 20:55:36")
    })
    it("按分钟计算", () => {
      const aMinuteLater = dt.addMinutes(1)
      expect(aMinuteLater.toString()).toBe("2020/02/24 20:56:36")
    })
    it("按小时计算", () => {
      const anHourLater = dt.addHours(1)
      expect(anHourLater.toString()).toBe("2020/02/24 21:55:36")
    })
    it("按天计算", () => {
      const aDayLater = dt.addDays(1)
      expect(aDayLater.toString()).toBe("2020/02/25 20:55:36")
    })
    it("按星期计算", () => {
      const aWeekLater = dt.addWeeks(1)
      expect(aWeekLater.toString()).toBe("2020/03/02 20:55:36")
    })
    it("按月计算", () => {
      const aMonthLater = dt.addMonths(1)
      expect(aMonthLater.toString()).toBe("2020/03/24 20:55:36")
    })
    it("按年计算", () => {
      const aYearLater = dt.addYears(1)
      expect(aYearLater.toString()).toBe("2021/02/24 20:55:36")
    })
    it("多计算", () => {
      const foo = dt
        .addMinutes(1)
        .addDays(2)
        .addMonths(3)

      expect(dt.toString()).toBe("2020/02/24 20:55:36")
      expect(foo.toString()).toBe("2020/05/26 20:56:36")
    })
  })
  it("可以自定义格式", () => {
    const now = new DateTime(Date.now())

    expect(now.format(DateTime.defaultFormatter)).toBe(now.toString())
  })
})
