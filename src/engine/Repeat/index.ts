import DateTime from "~/engine/DateTime"
import MinuteRepeat from "./MinuteRepeat"

export default {
  minute(base: DateTime = new DateTime()): MinuteRepeat {
    return new MinuteRepeat(base)
  },
}
