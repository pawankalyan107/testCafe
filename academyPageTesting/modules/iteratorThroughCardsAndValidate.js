import { Selector } from "testcafe";
import { checkLevelsOfEachCard } from "./checkLevelsOfEachCard";

export async function iteratorThroughCardsAndValidate(len, t) {
  for (let index2 = 1; index2 <= len; index2++) {
    // console.log(index)
    let val = await Selector(
      `#subject-course-cards > a:nth-child(${index2}) > div > div.course-desc > div.course-info > div:nth-child(2)`
    ).innerText;
    await checkLevelsOfEachCard(val, t);
  }
}
