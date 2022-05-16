import { Selector } from "testcafe";
// import { arrayOfDomains } from "./startPage";

const arrayOfDomains = [];
export async function recomendedCourse(t) {
    await t.expect(Selector("#courseSlider_gla_featured").exists).ok();
    await t.expect(Selector("#courseSlider_gla_featured").visible).ok();
    const recomended = Selector(
        "#courseSlider_gla_featured > div:nth-of-type(n)"
    );
    let sectionCount = await recomended.count;
    while (sectionCount) {
        let domains = await Selector(
            `#courseSlider_gla_featured > div:nth-child(${sectionCount}) > div > a`
        ).getAttribute("href");
        arrayOfDomains.push(domains);
        sectionCount--;
    }
    console.log(arrayOfDomains);
}
