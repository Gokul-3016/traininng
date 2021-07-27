import conf from "../config";
import supertest from "supertest";
import chai, { expect } from "chai";
import getschema from "../jsonschema/getschema.json";

const url = supertest(conf.baseurl);
describe('validate the responses for gte user scenarios', () => {
    it('enter the valid user', async () => {
        const response =  url.get(conf.validuser)
           
            .expect(200)
            .expect((res) => {
                expect(res.body).not.to.be.empty;
                expect(res.body).to.be.jsonSchema(getschema.valid_schema)
            })
    });
    it('enter the invalid user', async () => {
        const response =  url.get(conf.invaliduser)
          
            .expect(404)
            .expect((res) => {
                expect(res.body).not.to.be.empty;
                expect(res.body).to.be.jsonSchema(getschema.invalid_schema)
            })
    });
});
