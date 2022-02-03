import path from "../pageobject/flippath"
import url from "../url.js"
import utils from "../utilities/methods.js"
import data from "../inputdata/flipdata.js"

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
    get searchbox() {
        return $(path.search)
    }
    get lowprice() {
        return Math.min()
    }

    get searchbutton() {
        return $(path.searchbtn)
    }
    get lowPrice() {
        const a = [];
        this.laptop.map((element) =>
            a.push(element.getText()))
        return Math.min(a);
    }
    get myaccount() {
        return $(path.myaccnt)
    }
    get addtocart() {
        return $(path.addCart)
    }
    get toCart() {
        return $(path.cart)
    }
    get signout() {
        return $(path.sgnout)
    }
    getlocator(selector,replacepara){
        return $(selector.replace('<p1>',replacepara1));
    }
    login(){
        browser.url(url.f_k_url);
        var mainWindow =browser.getWindowHandle()
        console.log(mainWindow,"before clicking the login icon************")
        utils.clickBtn(this.signup)
        browser.pause(5000)
        var newWindow = browser.getWindowHandle()
        console.log(newWindow,"new window taken handling************")
        var handles = browser.getWindowHandles()
        browser.switchToWindow(handles[1].toString())
        utils.addValue(this.mail, data.emailid)
        //utils.clickBtn(this.continue)
        utils.addValue(this.password, data.pswrd)
        utils.clickBtn(this.submit)
        browser.pause(40000)

    }
    /*
    logedin() {
       
       browser.url(url.baseurl); 
         // var firstWindow = browser.getWindowHandle();
         //browser.pause(8000);
         //var handles = browser.getWindowHandles();
         //browser.switchToWindow(handles[1].toString());
         //expect(browser).toHaveTitle('')
         // browser.switchWindow('account/login?ret=/')
         //this.mail.waitFordisplayed()
        // var MainWindow = driver.getWindowHandle();
         // To handle all new opened window.				
         Set < String > s1 = driver.getWindowHandles();
         Iterator < String > i1 = s1.iterator();
         while (i1.hasNext()) {
             var  ChildWindow = i1.next();
 
             if (!MainWindow.equalsIgnoreCase(ChildWindow)) {
 
                 // Switching to Child window
                 driver.switchTo().window(ChildWindow);
                // driver.findElement(By.name("emailid")) .sendKeys("gaurav.3n@gmail.com");
                // driver.findElement(By.name("btnLogin")).click();
                 utils.addValue(this.mail, data.emailid)
 
                 // Closing the Child Window.
             
             // driver.close();
         
         }
 
         }
         
        // webDriver driver = new chromeDriver();
         //driver.get(url(url.baseurl))
         var MainWindow = browser.getWindowHandle();
         console.log("current window handle is "+MainWindow);
         utils.clickBtn(this.signup);
         console.log("after clicking window handle"+driver.getWindowHandle());
         var handles = browser.getWindowHandles();
         var it = handles.iterator();
        var newHandle =null;
        var handle =null;
        while(it.hasNext()){
            handle = it.next().tostring();
            console.log(handle);
            if (MainWindow.contentEquals(handle)){
                    }else{
                        newHandle=handle;
                    }
                }
                browser.switchTo().Window(newHandle)
                browser.switchTo.class("_3wFoIb row")
                var MainWindow = browser.getWindowHandle();
                console.log("current window handle is "+MainWindow);
                utils.clickBtn(this.signup);
               // browser.pause(5000);
                console.log("after clicking window handle..............");
                var newHandler = browser.getWindowHandle();
                var handles = browser.getWindowHandles();
                browser.switchToWindow(handles[1].tostring());
        //$(selector).waitForExist({ timeout, reverse, timeoutMsg, interval })
        utils.waitFor(this.mail,5000)
        utils.addValue(this.mail, data.emailid)
       // utils.clickBtn(this.continue)
        utils.addValue(this.password, data.pswrd)
        utils.clickBtn(this.submit)
    }
    
    laptoptocart() {

        utils.addValue(this.searchbox, data.data1)
        utils.clickBtn(this.searchbuton)
        utils.clickBtn(this.laptop, this.lowPrice)
        var firstWindow = browser.getWindowHandle();
        // console.log(firstWindow, 'Before laptop click windowHandle ************')
        utils.SetWindowSize(this.Laptop)
        browser.pause(8000);
        var newHandler = browser.getWindowHandle();
        //console.log(newHandler, 'After laptop click windowhandle ***********')
        var handles = browser.getWindowHandles();
        //console.log(handles, 'All handles printed here ****************##########')
        browser.switchToWindow(handles[1].toString());
        expect(browser).toHaveTitle('')
        utils.clickBtn(this.addtocart);
        browser.pause(5000);
        utils.clickBtn(this.viewcart)
        //  utils.clickBtn(this.searchbox)
        //   browser.waitForEnabled(this.laptop,5000)
        // browser.setTimeout(this.laptop,10000)
    }*/
    laptop(){
        utils.addValue(this.searchbox,data.data1)
        utils.clickBtn(this.searchbutton)
    }
    viewCart(){
        utils.clickBtn(this.toCart)
    }

    logout() {
        utils.moveToElement(this.myaccount)
        utils.clickBtn(this.signout)
    }
}
module.exports = new UI();