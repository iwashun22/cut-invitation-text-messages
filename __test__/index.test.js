const { convertDateToThai, convertDateByRegExr } = require('../util/convert-date-to-thai');
const { cutTextByArray, cutTextWithFilter } = require('../util/cut-text');
const { invitation, expectedResult } = require('./sampleText');

describe("can convert Date to Thai Date", () => {
  it("using convertDateToThai()", () => {
    expect(convertDateToThai("Time: Dec 12, 2022 10:00 PM Bangkok"))
      .toBe("Time: 12 ธ.ค. 22:00 น.");

    expect(convertDateToThai("Time: Jan 1, 2018 12:00 PM Bangkok"))
      .toBe("Time: 1 ม.ค. 00:00 น.");

    expect(convertDateToThai("Time: Mar 25, 2023 08:00 AM Bangkok"))
      .toBe("Time: 25 มี.ค. 08:00 น.");
  })

  it("using convertByRegExr()", () => {
    expect(convertDateByRegExr("Time: Dec 12, 2022 10:00 PM Bangkok"))
      .toBe("Time: 12 ธ.ค. 22:00 น.");

    expect(convertDateToThai("Time: Jan 1, 2018 12:00 PM Bangkok"))
      .toBe("Time: 1 ม.ค. 00:00 น.");

    expect(convertDateToThai("Time: Mar 25, 2023 08:00 AM Bangkok"))
      .toBe("Time: 25 มี.ค. 08:00 น.");
  })
})

describe("can cut the invitation text correctly", () => {
  it("using cutTextByArray()", () => {
    expect(cutTextByArray(invitation)).toBe(expectedResult);
  })

  it("using cutTextWithFilter()", () => {
    expect(cutTextWithFilter(invitation)).toBe(expectedResult);
  })
})