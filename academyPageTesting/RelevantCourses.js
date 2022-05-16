import { Selector } from "testcafe";

export async function RelevantCourses(t) {
    const lengthOfList = await Selector(`#sliding-navigation > a:nth-child(n)`).count
    for(let i=2; i<=lengthOfList-2; i++){
        await t.click(Selector(`#sliding-navigation > a:nth-child(${i+1})`));
        let data_rel = await Selector(`#courses-list-accordion > div:nth-child(${i}) > div`).getAttribute("data-rel")
        const cards = Selector(
            `#courseSlider_gla_${data_rel} > div:nth-of-type(n) > .card`
        );
        let listCount = await cards.count;
        let j =2;
        while (listCount) {
            let data_rell = await Selector(`#courses-list-accordion > div:nth-child(${i}) > div`).getAttribute("data-rel")
            const courseCards = await Selector(
                `#courseSlider_gla_${data_rell} > div:nth-child(${j-1}) > div > a`
            ).getAttribute('data-section');
            await t
                .expect(
                    Selector(`#sliding-navigation > a:nth-child(${i})`).getAttribute("data-domain-name")
                ).eql(courseCards);
            listCount--;
            j++
        }
    }
}
