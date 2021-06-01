import supertest from "supertest"
import endpoint from "../endpoint"
import chai from "chai"
import { expect } from "chai"
import jsonschema2 from "../jsonschema/deleteschema.json"
import { it } from "mocha"
chai.use(require('chai-json-schema'));

const url =supertest(endpoint.baseurl);

describe('delete users from the endpoints', () => {
    it('delete user details in the id', (done) => {
        const res =  url.delete(endpoint.deleteuser)
        done()
        .expect(200)
        .expect((res) => {
        expect(res.body).to.be.equal(jsonschema2.valid_schema)
                });
        });
    });