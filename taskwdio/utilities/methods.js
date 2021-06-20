class utility{
    
    addValue(element,text){
    return element.addValue(text);
    }
    clickBtn(element){
        return element.click();
    }
    moveToElement(element){
        return element.moveTo();
    }
    toGetValue(element){
        return element.getValue();
    }    
    waitFor(element){
        return element.waitForExist();
    }
    toGetText(element){
        return element.getText();
      }
}   
module.exports = new utility();