import { Selector } from "testcafe";

export async function hourCheck(t) {
    const hoursCount = await Selector(".course-filter-sec > #course-filter .duration ul li").count;
    let duration = ["extraShort", "short", "medium"];
    const invalidHours = [];
    for (let index4 = 0; index4 <= hoursCount - 1; index4++) {
        // console.log(duration[index4], index4)
        await t.click(
            Selector(`.course-filter-sec [data-filter-val=${duration[index4]}]`)
        );
        await t
            .expect(
                Selector(`.course-filter-sec [data-filter-val=${duration[index4]}]`).checked
            ).eql(true);
        let len = await Selector(`#subject-course-cards > a:nth-child(n)`).count;
        for (let index5 = 1; index5 <= len; index5++) {
            const val = await Selector(`#subject-course-cards`).child(`a:nth-child(${index5})`).child(`div`).child(`div.course-desc`).child(`div.course-info`).child(`div:nth-child(1)`).innerText;
            let hour = parseInt(val[0]);
            await t.expect(hour).lte(3)  
        }
        await t.click(
            Selector(`.course-filter-sec [data-filter-val=${duration[index4]}]`)
        );
        await t.expect(
            Selector(`.course-filter-sec [data-filter-val=${duration[index4]}]`).checked).eql(false);
    }
}
