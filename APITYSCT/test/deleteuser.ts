import conf from "../config";
import supertest from "supertest";
import chai, { expect } from "chai";
const url = supertest(conf.baseurl);
describe('validate response for delete function', () => {
    it('enter the invalid user', async () => {
        const response = url.post(conf.deleteuser)
            .expect(204)
            .expect((res) => {
                expect(res.body).to.be.empty;
            });
    });
});