    import path from "../pageobjects/path"
     import utils from "../utilities/methods"
     import url from "../url";
     import data from "../input_data/data";
  
  class UI {
      get disappear1()
      {return  $(path.disappear) }
      get home1()
      { return $(path.home)}
      get getstarted(){
          return $(path.start)
      }
      get searchbox(){
        return $(path.search)
    }
    get textbox(){
        return $(path.txtbox)
    }
    get titlespan(){
        return $(path.frstspan)
    }
    get npmi(){
        return $(path.install)
    }
    disapear123(){
        browser.url(url.homeurl)
        utils.clik(this.disappear1)
        utils.clik(this.home1)
    }
    haveTitle(){
        browser.url(url.homeurl)
        expect(browser).toHaveTitle(data.title);
    }
    
}
    export default new UI();