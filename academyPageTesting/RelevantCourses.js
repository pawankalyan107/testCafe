import { Selector } from "testcafe";

export async function RelevantCourses(t) {
    const lengthOfCourseList = await Selector(`#sliding-navigation > a:nth-child(n)`).count
    for(let index=2; index<=lengthOfCourseList-2; index++){
        await t.click(Selector(`#sliding-navigation > a:nth-child(${index+1})`));
        let dataAttribute = await Selector(`#courses-list-accordion > div:nth-child(${index}) > div`).getAttribute("data-rel")
        const cards = Selector(
            `#courseSlider_gla_${dataAttribute} > div:nth-of-type(n) > .card`
        );
        let listCount = await cards.count;
        let j =2;
        while (listCount) {
            const courseCards = await Selector(
                `#courseSlider_gla_${dataAttribute} > div:nth-child(${j-1}) > div > a`
            ).getAttribute('data-section');
            await t
                .expect(
                    Selector(`#sliding-navigation > a:nth-child(${index})`).getAttribute("data-domain-name")
                ).eql(courseCards);
            listCount--;
            j++
        }
    }
}
