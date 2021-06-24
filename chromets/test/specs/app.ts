import home21  from "src/homepage"
import url from "/url"
import data from "input_data/data";
  

describe('internet home page', () => {

  it('valid the title of homepage is the internet', async () => {
    //home21.haveTitle();
    browser.url(url.homeurl)
    expect(browser).toHaveTitle(data.title);
});
it('disappearing elements in herokuapp', async () => {
       
  //await browser.url(url.homeurl)
   await (await home21.disappear1).click();
   await (await home21.home1).click();
});
  })