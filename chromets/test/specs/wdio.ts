import home21 from "src/homepage"
import url from "/url"
import data from "input_data/data";


describe('internet home page', () => {

    it('valid the title of homepage is the internet', async () => {
        //home21.haveTitle();
        browser.url(url.wdiourl)
        browser.setWindowSize(2400, 1200)
        expect(browser).toHaveTitle(data.title1);
    });
    it('click get started', async () => {
        (await home21.getstarted).click();
    });
    it('click search and find babel', async () => {
        (await home21.searchbox).click();
       /*var firstWindow= browser.getWindowHandle()
        console.log(firstWindow, 'hopmepage windowHandle ************');
       
        var newHandler = browser.getWindowHandle()
        console.log(newHandler, 'windowhandles new popup window ***********')
        var handles = browser.getWindowHandles()
        console.log(handles, 'All handles printed here *************')
        browser.switchToWindow(handles[1].toString());*/
        (await home21.textbox).addValue(data.inputdata1);

    });
    it('click get babel install', async () => {
        (await home21.titlespan).click();
        const a = (await home21.npmi).getText();
        console.log(a);

    });

})