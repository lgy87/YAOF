import Repeat from "./Base"

export default class MinuteRepeat extends Repeat {
  next(minutes: number = 1) {
    return new MinuteRepeat(this.base.addMinutes(minutes))
  }
}
