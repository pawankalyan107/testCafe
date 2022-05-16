import { Selector } from "testcafe";
import { cardDetails } from "./cardDetails";
import { filterCheck } from "./filterLevels";
import { recomendedCourse } from "./recomendedCourseSection";
import { RelevantCourses } from "./RelevantCourses";
import { seeAllCourseButton } from "./seeAllCourseButton";
import {getWindowLocation} from "../utils/getPageURL"
import {academyhomepageURL} from "../utils/constatnts"
import { hourCheck } from "./hourCheck";
import { footer } from "./footer";
import { readyToLearnDiv } from "./readyToLearnDiv";
import { testimoinals } from "./testimoinals";
import { filterCombine } from "./filtercombinationCheck";

fixture`header to body automate testing`
  .page`https://www.mygreatlearning.com/academy`;

test("check the url", async (t) => {
  const location = await getWindowLocation();
  await t.expect(location.href).eql(academyhomepageURL);
});

test("Start now banner", async (t) => {
  await t
    .expect(
      Selector(".academy-header-grid-new").exists
    )
    .ok()
    .expect(
      Selector(".academy-header-grid-new").visible
    )
    .ok()
});

test("Start for free button", async (t) => {
  await t
    .expect(
      Selector("#header-start-for-free-button").exists
    ).ok()
    .expect(
      Selector("#header-start-for-free-button").visible
    ).ok()
});

test("on click signup popup should be displayed", async (t) => {
  await t.click(Selector("#header-start-for-free-button"));
  await t.expect(Selector("#corp-login-modal > .modal-div").visible).ok();
});

test("Recomended course section", async (t) => {
  await recomendedCourse(t);
});

test("check popular courses is active", async (t) => {
  await t
    .expect(Selector(`[title='Popular Courses']`).classNames)
    .contains("active");
});

test("Show Relevant course cards", async (t) => {
  await RelevantCourses(t);
});

test("see all courses button it should not be visible if cards are less than 9", async (t) => {
  await seeAllCourseButton(t);
});

test(`on click see all button`, async (t) => {
  await t.click(Selector(`a.see-all-courses-cta`));
  const url = await t.eval(() => document.documentURI);
  // console.log(url)
  await t
    .expect(url)
    .contains("https://www.mygreatlearning.com/academy/learn-for-free/courses");
});

test(`on clicking on course card redirecting to new course page`, async (t) => {
  await t.click(Selector(`#courseSlider_gla_popular > div:nth-of-type(1)`));

  const url = await t.eval(() => document.documentURI);

  await t.expect(url).eql(
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-fundamentals-for-beginners"
    );
});

test(`card details should exist`, async (t) => {
  await cardDetails(t);
});

test(`Popular topic to explore`, async (t) => {
  await t.expect(Selector(`.subject-page-cards-container`).exists).ok()
  await t.expect(Selector(`.subject-page-cards-container`).visible).ok()
  let numberOfCards = await Selector(`.subject-page-cards-container`).child(`a`)
    .count;
  await t.expect(numberOfCards).eql(8);
});

test(`checkbox filter levels`, async (t) => {
  await filterCheck(t);
});

test(`testing filterCombinations`, async t=>{
  await filterCombine(t)
})

test.page`https://www.mygreatlearning.com/aws/free-courses`
    (`check filter for hoursCount`, async (t) => {
    await hourCheck(t);
});

test(`testing testimoinals`, async t=>{
    await testimoinals(t);
})

test(`testing ready to learn container`, async t=>{
    await readyToLearnDiv(t);
})

test(`Testing footer`, async t =>{
    await footer(t);
})
