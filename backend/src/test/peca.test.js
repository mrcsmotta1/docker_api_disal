const chai = require("chai");
const app = require("./../app");
const chaiHttp = require("chai-http");
var should = chai.should();
const expect = require("chai").expect;
const assert = require("chai").assert;

chai.use(chaiHttp);

const urlList = "/api/v1/registers";
const urlinsert = "/api/v1/register";
const urlSelectByOs = "/api/v1/register/os";
const urlRegisterId = "/api/v1/register/id";
const _os = 666999;

const peca = {
  os: _os,
  nome: "Peça teste",
  descricao: "Teste de registro",
  peso: 1.25,
  datafabricacao: "2020-05-19",
};

const pecaUpdate = {
  os: _os,
  nome: "Peça teste mocha",
  descricao: "Teste de registro mocha",
  peso: 1.25,
  datafabricacao: "2020-05-20",
};

before(async () => {
  let buscaId = await chai.request(app).get(`${urlSelectByOs}/${_os}`);
  if (buscaId.status == 200) {
    const ideDel = buscaId.body.doc._id;
    await chai.request(app).delete(`${urlRegisterId}/${ideDel}`);
  }
});

describe("returns status 200 and a list of registered pieces", () => {
  it("Returns a list of registered pieces", (done) => {
    chai
      .request(app)
      .get(`${urlList}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("doc");
        res.should.be.an("object");
        done();
      });
  });
});

describe("Returns status 201 when inserting a new part", () => {
  it("You must insert a new part", (done) => {
    chai
      .request(app)
      .post(urlinsert)
      .send(peca)
      .end((err, res) => {
        res.should.have.status(201);
        _id = res.body.doc._id;
        done();
      });
  });
});

describe("Returns status 409 when inserting a part with OS already registered", () => {
  it("A duplicate part message must be returned wih status 409", (done) => {
    chai
      .request(app)
      .post(urlinsert)
      .send(peca)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.property("error");
        res.should.be.an("object");
        done();
      });
  });
});

describe("Returns status 200 when searching for a part by id", () => {
  it("Must return status 200 with the json selected by id", (done) => {
    chai
      .request(app)
      .get(`${urlRegisterId}/${_id}`)
      .end((err, res) => {
        // console.log(res);
        res.should.have.status(200);
        // res.body.should.have.property("doc");
        // res.should.be.an("object");
        done();
      });
  });
});

describe("Returns status 200 when changing data for a registered part", () => {
  it("must return status 200 with the changed json", (done) => {
    chai
      .request(app)
      .put(`${urlRegisterId}/${_id}`)
      .send(pecaUpdate)
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.have.property("doc");
        // res.should.be.an("object");
        done();
      });
  });
});

describe("returns status 200 when deleting a piece by id", () => {
  it("Must delete a piece by id", (done) => {
    chai
      .request(app)
      .delete(`${urlRegisterId}/${_id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message");
        // res.should.be.an("object");
        done();
      });
  });
});
