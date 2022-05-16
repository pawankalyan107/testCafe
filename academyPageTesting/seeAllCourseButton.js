import { Selector } from "testcafe";

export async function seeAllCourseButton(t) {
    let links = await Selector(`#sliding-navigation .track-click-mp`).count;
    let count = 0;
    for (let index = 0; index <= links - 1; index++) {
        await t.click(Selector(`#sliding-navigation .track-click-mp`).nth(index));
        const cards = Selector(
            "#courses-list-accordion div .acc-content .tns-carousel .item > div:nth-child(n)"
        );
        let listCount = await cards.count;
        let numberOfCards = (count - listCount) * -1;
        if (numberOfCards >= 9) {
            //   console.log(numberOfCards)
            Selector(
                `#courses-list-accordion`).child(`div`).child(`.acc-content .tns-carousel .item > div:nth-child(${index}) a.see-all-courses-cta`
            ).exists;   
            Selector(
                `#courses-list-accordion div .acc-content .tns-carousel .item > div:nth-child(${index}) a.see-all-courses-cta`
            ).visible 
        }
        count = listCount;
    }
}
