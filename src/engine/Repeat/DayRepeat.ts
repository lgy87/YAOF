import Repeat from "./Base"

export default class DayRepeat extends Repeat {
  next(day: number = 1) {
    return new DayRepeat(this.base.addDays(day))
  }
}
