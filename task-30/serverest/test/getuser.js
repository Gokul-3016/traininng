import supertest from "supertest"
import endpoint from "../endpoint"
import chai from "chai"
import { expect } from "chai"
import jsonschema1 from "../jsonschema/getschema.json"
import { it } from "mocha"
chai.use(require('chai-json-schema'));

const url =supertest(endpoint.baseurl);

describe('get users from the endpoints', () => {
    it('get user details in the id',async () => {
        const res =   url.get(endpoint.getuser)
         .expect(200)
        .expect((res) => {
        expect(res.body).to.be.equal(jsonschema1.valid_schema)
                });
        });
    });