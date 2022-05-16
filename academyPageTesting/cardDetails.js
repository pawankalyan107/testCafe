import { Selector } from "testcafe";

export async function cardDetails(t) {
    await t
        .expect(
            Selector(`#courseSlider_gla_popular`)
                .child(`div:nth-child(n)`)
                .child(`div`)
                .child(`a`)
                .child(`div.pb-16`)
                .child(`div`)
                .child(`div.d-flex.justify-content-between`).exists
        )
        .ok();
    await t
        .expect(
            Selector(`#courseSlider_gla_popular`)
                .child(`div:nth-child(n)`)
                .child(`div`)
                .child(`a`)
                .child(`.pb-16`)
                .child(`div`)
                .child(`div:nth-child(2)`).exists
        )
        .ok();
    await t
        .expect(
            Selector(`#courseSlider_gla_popular`)
                .child(`div:nth-child(n)`)
                .child(`div`)
                .child(`a`)
                .child(`div.pb-16`)
                .child(`div`)
                .child(`.star-ratings-container-sm.text-left`).exists
        )
        .ok();
    await t
        .expect(
            Selector(`#courseSlider_gla_popular`)
                .child(`.item:nth-of-type(n)`)
                .child(`.card`)
                .child(`.card-footer`)
                .child(`.know-more`)
                .child(`.cta-popup`)
                .child(`a`).exists
        )
        .ok();
    await t.click(
        Selector(`#courseSlider_gla_popular`)
            .child(`.item:nth-of-type(n)`)
            .child(`.card`)
            .child(`.card-footer`)
            .child(`.know-more`)
            .child(`.cta-popup`)
            .child(`a`)
    );
    await t.expect(Selector(`#corp-login-modal`).child(`div`).exists).ok();
}
