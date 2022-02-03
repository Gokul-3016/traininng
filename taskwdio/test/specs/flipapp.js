import testjob from "../../page/fliphome"

describe('webdriverio testing in flipkart website to ', () => {
    it('login into flipkart account  through its webpage', () => {
        testjob.login();
    });
    it('view laptop ', () => {
        testjob.laptop();
    });
    it('view cart', () => {
        testjob.viewCart();
    });
    it('Logout from the flipkart account', () => {
        testjob.logout();
    });
});