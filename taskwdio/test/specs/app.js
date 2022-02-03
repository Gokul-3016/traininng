import testjob from "../../page/homepage"

describe('webdriverio testing in amazon website', () => {
    it('login into amazon account  through its webpage', () => {
        testjob.login();
    });
    it('add the lowest price laptop to the cart', () => {
        testjob.lowPrice();
    });
//    it('add the lowest price laptop to the cart', () => {
//        testjob.laptop();
//    });
    it('remove laptop from the cart', () => {
        testjob.removeFromCart();
    });
    it('Logout from the amazon account', () => {
        testjob.logout();
    });
});