import home21  from "src/homepage"
import url from "/url"
import data from "input_data/data";
  

describe('make bookings on redbus travels webpage', () => {

  it('valid the title of redbus homepage',  () => {
    browser.url(url.redbus_url);
    expect(browser).toHaveTitle(data.redbustitle);
});
it('search buses for required transportation', async() =>{
   (await home21.fromLocation).setValue(data.fromCity);
   (await home21.toLocation).setValue(data.toCity);
    (await home21.selectTravelTab).click();
    (await home21.selectTravelTab).selectByVisibleText(data.travelDate);
  //(await home21.dateOfTravel).click();
  browser.pause(3000);
  (await home21.searchBusesButon).click();
});
it('get all travels name',  () =>{
    let transportServices = [];
    (home21.allTravelsID).map((element) =>
        transportServices.push(element.getText()))
    console.log("the transport services are ", transportServices);
    browser.pause(10000)
});
it('select the transport service and book seats',async () => {
    (await home21.viewParveenSeats).click();
    (await home21.selectFreeSeat).click();
});
it('provide boarding and dropping point and book the seat',async () => {
    (await home21.selectBoardingPoint).click();
    (await home21.droppingPointTab).click();
    (await home21.selectDroppingPoint).click();
    (await home21.selectContinue).click();
    (await home21.proceedToBook).click();
});
});