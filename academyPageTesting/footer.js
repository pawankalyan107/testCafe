import { Selector } from "testcafe";

export async function footer(t) {
  await t.expect(Selector(`body > section > footer`)).exists;
  await t.expect(Selector(`body > section > footer`)).visible;
  await t.expect(Selector(`.programs-container > div:nth-of-type(n)`)).exists;
  await t.expect(Selector(`.programs-container > div:nth-of-type(n)`)).visible;
  await t.expect(Selector(`.copyright`)).exists;
  await t.expect(Selector(`.copyright`)).visible;
  await t.expect(Selector(`.programs-container > div:nth-of-type(2)`)).exists;
  await t.expect(Selector(`.programs-container > div:nth-of-type(2)`)).visible;
}
