import home  from "../page/home"

describe('internet home page', () => {

  /*  it('should have the title', () => {
       home.title();
    });*/

    it('drag and drop elements',() => {
        home.drag();
    });

    it('make checked boxes', () => {
        home.checked();
    });

    it('forgot password testing', () => {
        home.forgotPassword();
    });
})