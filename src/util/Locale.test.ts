import {Locale} from "util/Locale"

describe("Locale", () => {

  test("init", () => {
    const french = "fr"
    const france = "FR"
    const locale = new Locale(french, france)
    expect(locale.getLanguage()).toBe(french)
    expect(locale.getCountry()).toBe(france)
  })
})
