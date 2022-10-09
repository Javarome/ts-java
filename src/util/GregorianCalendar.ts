import {Calendar} from "util/Calendar"
import {Locale} from "util/Locale"

export class GregorianCalendar extends Calendar {

  constructor(protected locale: Locale, time = new Date()) {
    super(time)
  }

  static getInstance(locale: Locale) {
    return new GregorianCalendar(locale)
  }
}
