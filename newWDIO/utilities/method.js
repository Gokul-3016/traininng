class utility {
    clickBtn(element) {
        element.click();
    }
    toDragAndDrop(element, element1) {
        return element.dragAndDrop(element1);
    }
    //toCheckedBoxes(element){
    //  return element.checked();
    //}
    addValue(element, text) {
        return element.addValue(text);
    }
}
module.exports = new utility(); //function in utility class are called by this object