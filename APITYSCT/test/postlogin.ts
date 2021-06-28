import conf from "../config";
import supertest from "supertest";
import chai, { expect } from "chai";
import data from "../input_data/postlogindata";
import postschema from "../jsonschema/postschema.json";

const url = supertest(conf.baseurl);
describe('validate response for post function', () => {
    it('enter the valid details to create new user', async () => {
        const response =  url.post(conf.postlogin)
            .type('application/json')
            .send({
                "name": data.name11,
                "job": data.job22
            })
            .expect(201)
            .expect((res) => {
                expect(res.body).not.to.be.empty;
                expect(res.body).to.be.jsonSchema(postschema.create_schema)
            })
    });
    it('enter the valid credentials', async () => {
        const response =  url.post(conf.postlogin)
            .type('application/json')
            .send({
                "email": data.email1,
                "password": data.password1
            })
            .expect(200)
            .expect((res) => {
                expect(res.body).not.to.be.empty;
                expect(res.body).to.be.jsonSchema(postschema.valid_schema)
            })
    });
    it('enter the invalid credentials', async () => {
        const response =  url.post(conf.postlogin)
            .type('application/json')
            .send({
                "email": data.email1
            })
            .expect(400)
            .expect((res) => {
                expect(res.body).not.to.be.empty;
                expect(res.body).to.be.jsonSchema(postschema.invalid_schema)
            })
    });
});