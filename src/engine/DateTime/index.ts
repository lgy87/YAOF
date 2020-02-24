import * as dateFNs from "date-fns/fp"

type Unit = "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year"
export type Op =
  | "addMinutes"
  | "addHours"
  | "addDays"
  | "addWeeks"
  | "addMonths"
  | "addYears"

export default class DateTime {
  #value: number

  static defaultFormatter = "yyyy/MM/dd HH:mm:ss"

  constructor(timestamp: number = Date.now()) {
    this.#value = timestamp
  }
  static now() {
    return new this()
  }
  format(template: string = DateTime.defaultFormatter) {
    return dateFNs.format(template, this.#value)
  }
  value() {
    return this.#value
  }
  toString() {
    return this.format(DateTime.defaultFormatter)
  }
  lt(other: DateTime) {
    return this.value() < other.value()
  }
  eq(other: DateTime) {
    return !this.lt(other) && !other.lt(this)
  }
  gt(other: DateTime) {
    return other.lt(this)
  }
  lte(other: DateTime) {
    return this.lt(other) || this.eq(other)
  }
  gte(other: DateTime) {
    return this.gt(other) || this.eq(other)
  }
  private opBy(op: Op, n: number = 1) {
    const value = dateFNs[op](n, this.#value).valueOf()

    return new DateTime(value)
  }
  addMinutes(minutes: number = 1) {
    return this.opBy("addMinutes", minutes)
  }
  addHours(hours: number = 1) {
    return this.opBy("addHours", hours)
  }
  addDays(days: number = 1) {
    return this.opBy("addDays", days)
  }
  addWeeks(weeks: number = 1) {
    return this.opBy("addWeeks", weeks)
  }
  addMonths(months: number = 1) {
    return this.opBy("addMonths", months)
  }
  addYears(years: number = 1) {
    return this.opBy("addYears", years)
  }
}
