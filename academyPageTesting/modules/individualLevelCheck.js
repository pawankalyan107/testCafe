import { Selector } from "testcafe";

export async function individualLevelCheck(len, t, text) {
  for (let index2 = 1; index2 <= len; index2++) {
    // console.log(index)
    let val = await Selector(
      `#subject-course-cards`)
      .child(`a:nth-child(${index2})`)
      .child(`div`)
      .child(`div.course-desc`)
      .child(`div.course-info`)
      .child(`div:nth-child(2)`
      ).innerText;
    await t.expect(val).eql(text);
  }
}
