import supertest from "supertest";
import chai from "chai";
import { expect } from "chai"
import data from "../input_data/patchdata";
import  putjsonschema from "../jsonschema/patchschema.json";
import conf from "../config"
chai.use(require('chai-json-schema'))

const url = supertest(conf.baseurl)

describe('make update on the given user',  () => {
    it('made the given changes in user id ', async () => {
        const response =  url.put(conf.putupdate)
            .type('application/json')
            .send({
                "name": data.name1,
                "job": data.job1
            })
            .expect(200)
            .expect((res) => {
             expect(res.body).to.be.jsonSchema(putjsonschema.valid_schema)
            })
    });
    
});