import path from "../pageobjects/path"
import utils from "../utilities/methods"
import url from "../url";
import data from "../input_data/data";

class UI {
    get disappear1() { return $(path.disappear) }
    get home1() { return $(path.home) }
    get getstarted() {
        return $(path.start)
    }
    get searchbox() {
        return $(path.search)
    }
    get textbox() {
        return $(path.txtbox)
    }
    get titlespan() {
        return $(path.frstspan)
    }
    get npmi() {
        return $(path.install)
    }
    get fromLocation() {
        return $(path.fromCity)
    }
    get toLocation() {
        return $(path.toCity)
    }
    get selectTravelTab() {
        return $(path.rideDateTab)
    }
    get dateOfTravel() {
        let res = (path.rideDate).replace("<p1>", "23-Jul-2021");
        return $(res)
    }
    get searchBusesButon() {
        return $(path.searchBuses)
    }
    get allTravelsID() {
        return $$(path.alltravelid)
    }
    get parveenTravels() {
        return $(path.parveen)
    }
    get viewParveenSeats() {
        return $(path.parveenseats)
    }
    get selectFreeSeat() {
        return $(path.selectSeat)
    }
    get selectBoardingPoint() {
        return $(path.boardingpoint)
    }
    get droppingPointTab() {
        return $(path.droppingTab)
    }
    get selectDroppingPoint() {
        return $(path.droppingpoint)
    }
    get selectContinue() {
        return $(path.continuebtn)
    }
    get proceedToBook() {
        return $(path.proceedbtn)
    }


    disapear123() {
        browser.url(url.herokuapp_url)
        utils.clik(this.disappear1)
        utils.clik(this.home1)
    }
    haveTitle() {
        browser.url(url.herokuapp_url)
        expect(browser).toHaveTitle(data.title);
    }

}
export default new UI();