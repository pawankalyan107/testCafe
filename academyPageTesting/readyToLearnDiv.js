import { Selector } from "testcafe";

export async function readyToLearnDiv(t) {
  await t.expect(Selector(`.ready-to-learn-container`)).exists;
  await t.expect(Selector(`.ready-to-learn-container`)).visible;
}
