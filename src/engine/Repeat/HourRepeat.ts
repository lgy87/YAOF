import Repeat from "./Base"

export default class HourRepeat extends Repeat {
  next(hour: number = 1) {
    return new HourRepeat(this.base.addHours(hour))
  }
}
