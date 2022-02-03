import path from "../pageobject/path";
import utils from "../utilities/method";
import url from "../url";
import data from "../testdata/data";

class UI{
    get draganddrop(){
        return $(path.drgndrp)
    }
    get drag1(){
        return $(path.dragA)
    }
    get drag2(){
        return $(path.dragB)
    }
    get checkboxes(){
        return $(path.homepagecheckboxes)
    }
    get checkbox1(){
        return $(path.checkboxes)
    }
    get forgot(){
        return $(path.fgtpswd)
    }
    get mail(){
        return $(path.mailbox)
    }
    get resetBtn(){
        return $(path.retrieveBtn)
    }
  
    drag(){
        browser.url(url.homeurl);
        utils.clickBtn(this.draganddrop)
        utils.toDragAndDrop(this.drag1,this.drag2)
    }
    checked(){
        browser.url(url.homeurl)
        utils.clickBtn(this.checkboxes)
        utils.clickBtn(this.checkbox1)
       // utils.toCheckedBoxes(this.checkbox1)
    }
    forgotPassword(){
        browser.url(url.homeurl)
        utils.clickBtn(this.forgot)
        utils.addValue(this.mail,data.gmail)
        utils.clickBtn(this.resetBtn)


    }
}
module.exports = new UI();