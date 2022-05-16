import { Selector } from "testcafe";
import { individualLevelCheck } from "./modules/individualLevelCheck";

export async function filterCheck(t) {
  await t.click(Selector(`[href='/aws/free-courses']`));
  let lis = Selector(`.course-filter-sec .level li:nth-of-type(n)`);
  let listCount = await lis.count;
  //   console.log(listCount)
  for (let index = 1; index <= listCount; index++) {
    let levels = await Selector(
      `.course-filter-sec .level li:nth-of-type(${index}) label`
    ).innerText;
    // console.log(levels)
    await t.click(Selector(`.course-filter-sec [data-filter-val=${levels}]`));
    await t
      .expect(
        Selector(`.course-filter-sec [data-filter-val=${levels}]`).checked
      )
      .eql(true);
    let len = await Selector(`#subject-course-cards > a:nth-child(n)`).count;
    // console.log(len)
    let exist = Selector(`#next-nav`);
    let text = await Selector(`#course-filter`)
      .child(`.level.filter`)
      .child(`.level.filter-content`)
      .child(`ul`)
      .child(`li:nth-child(${index})`)
      .child(`label`).innerText;
    await individualLevelCheck(len, t, text);
    if (len >= 10) {
      await t.click(exist);
      let len1 = await Selector(`#subject-course-cards > a:nth-child(n)`).count;
      await individualLevelCheck(len1, t, text)
    }
    await t.click(Selector(`.course-filter-sec [data-filter-val=${levels}]`));
    await t
      .expect(
        Selector(`.course-filter-sec [data-filter-val=${levels}]`).checked
      )
      .eql(false);
  }
}

