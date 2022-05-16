import { Selector } from "testcafe";

export async function testimoinals(t) {
  await t.expect(Selector(`.learn-for-free-testimonial-container`)).exists;
  await t.expect(Selector(`.learn-for-free-testimonial-container`)).visible;
  await t.expect(Selector(`.learn-for-free-testimonial-card-container > div:nth-of-type(n)`).count).eql(7);
}
