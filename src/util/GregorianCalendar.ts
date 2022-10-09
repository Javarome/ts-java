import {Calendar} from "./Calendar"
import {Locale} from "./Locale"

export class GregorianCalendar extends Calendar {

  constructor(protected locale: Locale, time = new Date()) {
    super(time)
  }

  static getInstance(locale: Locale) {
    return new GregorianCalendar(locale)
  }
}
