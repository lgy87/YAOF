import Repeat from "./Base"

export default class YearRepeat extends Repeat {
  next(year: number = 1) {
    return new YearRepeat(this.base.addYears(year))
  }
}
