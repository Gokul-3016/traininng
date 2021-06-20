import path from "../pageobject/path"
import url from "../url.js"
import utils from "../utilities/methods.js"
import data from "../inputdata/data.js"

class UI {
    get signup() {
        return $(path.signin)
    }
    get mail() {
        return $(path.email)
    }
    get continue() {
        return $(path.contnue)
    }
    get password() {
        return $(path.pswd)
    }
    get submit() {
        return $(path.sbmt)
    }
    get homePageBtn() {
        return $(path.home)
    }
    get searchbox() {
        return $(path.search)
    }
    get searchbuton() {
        return $(path.searchbtn)
    }
    get firstlaptop() {
        return $(path.firstlap)
    }
    get addtocart() {
        return $(path.addCart)
    }
    get viewcart() {
        return $(path.cart)
    }
    get deleteFromCart() {
        return $(path.delete)
    }
    get signout() {
        return $(path.sgnout)
    }
    selector(p1, p2) {
        return $(p1.replace('<p>', 'p2'))
    }
    get locator() {
        return $$(path.priceList)

    }
    get minivalue() {
        var a = Math.min(b)
        return a;
    }
    lowPrice() {

        utils.addValue(this.searchbox, data.data1)
        utils.clickBtn(this.searchbuton)
        //get pricelist and store it in an array
        var ratelist = [];
        this.locator.map((element) =>
            ratelist.push(element.getText()))
        console.log("the values in the price list", ratelist);
        browser.pause(10000)
        //to sort the array elemnts in ascending orders
        // function myFunction() {
        //  ratelist .sort(function(a, b){return a-b});
        // var lowValue =ratelist.map(Math.min)
       /// console.log("the first element of the array", lowValue);
        var sortlist = ratelist.sort(function (a, b) { return a - b });
        browser.pause(5000)
        console.log("after sorting the elements in the array", sortlist)
        browser.pause(5000)
        //returning the first element in the array
        const firstElement = sortlist[0];
        console.log("the first element of the array", firstElement);
        return firstElement;
        

    }

    laptop() {

        utils.clickBtn(this.lowPrice)
        utils.clickBtn(this.addtocart)
    }
    login() {

        browser.url(url.a_z_url);
        utils.clickBtn(this.signup)
        utils.addValue(this.mail, data.emailid)
        utils.clickBtn(this.continue)
        utils.addValue(this.password, data.pswrd)
        utils.clickBtn(this.submit)
        browser.pause(40000)
    }
    laptoptocart() {

        utils.addValue(this.searchbox, data.data1)
        utils.clickBtn(this.searchbuton)
        browser.watForElement(this.lowPrice)
        //utils.clickBtn(this.firstlaptop)
        //utils.clickBtn(this.laptop, this.lowPrice)
        //utils.clickBtn(this.firstlaptop)
        /*var firstWindow = browser.getWindowHandle()
        console.log(firstWindow, 'Before laptop click windowHandle ************')
        //browser.waitForElement(this.lowPrice)
        //utils.toGetText(this.lowPrice)
        utils.clickBtn(this.lowPrice)
        browser.pause(8000)
        var newHandler = browser.getWindowHandle()
        console.log(newHandler, 'After laptop click windowhandle ***********')
        var handles = browser.getWindowHandles()
        console.log(handles, 'All handles printed here ****************##########')
        browser.switchToWindow(handles[1].toString())
        //expect(browser).toHaveTitle('')
        utils.clickBtn(this.addtocart)
        browser.pause(8000)*/


    }
    removeFromCart() {
        utils.clickBtn(this.viewcart)
        browser.pause(3000)
        utils.clickBtn(this.deleteFromCart)
        utils.clickBtn(this.homePageBtn)
    }

    logout() {
        utils.moveToElement(this.signup)
        utils.clickBtn(this.signout)
    }
}

module.exports = new UI();