import { Selector } from "testcafe";
import { iteratorThroughCardsAndValidate } from "./modules/iteratorThroughCardsAndValidate";

export async function filterCombine(t) {
  await t.click(Selector(`[href='/aws/free-courses']`));
  let lis = Selector(`.course-filter-sec .level li:nth-of-type(n)`);
  let listCount = await lis.count;
  //   console.log(listCount)
  for (let index = 1; index <= listCount-1; index++) {
    let levels = await Selector(
      `.course-filter-sec .level li:nth-of-type(${index}) label`
    ).innerText;
    let level2 = await Selector(
      `.course-filter-sec .level li:nth-of-type(${index+1}) label`
    ).innerText;
    // console.log(levels)
    await t.click(Selector(`.course-filter-sec [data-filter-val=${levels}]`));
    await t
      .expect(
        Selector(`.course-filter-sec [data-filter-val=${levels}]`).checked
      )
      .eql(true);
    await t.click(Selector(`.course-filter-sec [data-filter-val=${level2}]`));
    await t
        .expect(
          Selector(`.course-filter-sec [data-filter-val=${level2}]`).checked
        )
        .eql(true)
    let len = await Selector(`#subject-course-cards > a:nth-child(n)`).count;

    let exist = Selector(`#next-nav`);

    await iteratorThroughCardsAndValidate(len, t);
    if (len >= 10) {
      await t.click(exist);
      await iteratorThroughCardsAndValidate(len, t);
      await t.click(Selector(`.course-filter-sec [data-filter-val=${level2}]`));
      await t
        .expect(
          Selector(`.course-filter-sec [data-filter-val=${level2}]`).checked
        )
        .eql(false);
    }
  }
}


