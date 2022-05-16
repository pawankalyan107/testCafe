import { Selector} from "testcafe";

fixture `testing a random page`
    .page `http://127.0.0.1:5500/html5.html`
test(`this is a simple test`, async t=>{
   const a = await Selector('#parent').child('div').child(`p`).innerText
   console.log(a)
})