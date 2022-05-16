import {academyhomepageURL} from "./utils/constatnts"
import { Selector } from "testcafe";
import {getWindowLocation} from "./utils/getPageURL"


fixture`automate testing Google signup`
    .page `https://www.mygreatlearning.com/academy`;

test("check the url", async (t) => {
    const location = await getWindowLocation();
    await t.expect(location.href).eql(academyhomepageURL);
    });

test('click on signup button', async(t) => {
    await t.click(Selector(`.navbar-nav > li:nth-of-type(3)`))
    await t.click(Selector(`.google-login-button[data-title='Signup Modal']`)
        .child(`.google-login-content`))
    await t.typeText(Selector(`#identifierId`), `emailid`)
        .click(Selector(`#identifierNext > div > button > span`))
    await t.typeText(Selector(`#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input`), `password`)
        .click(Selector(`#passwordNext > div > button > span`))
 })
