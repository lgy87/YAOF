/*
 * Guangyao Li
 * 2020/02/23
 * lgy87@foxmail.com
 */
import { format } from "date-fns/fp"
import nanoID from "nanoid"

export type Option = {
  prefix?: string
  suffix?: string
}

export default function({ prefix = "", suffix = "" }: Option = {}) {
  const now = format("yyyyMMddHHmmss", Date.now())
  const random = nanoID()

  return `${prefix}${now}_${random}${suffix}`
}
