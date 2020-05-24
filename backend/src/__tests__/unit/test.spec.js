const supertest = require("supertest");
const Helper = require("./../helpers/helpers");
const helper = new Helper();

const urlList = "/api/v1/registers";
const urlinsert = "/api/v1/register";
const urlSelectByOs = "/api/v1/register/os";
const urlRegisterId = "/api/v1/register/id";
const _os = 666999;

jest.useFakeTimers();
describe("returns status 200 and a list of registered pieces", () => {
  it("Returns a list of registered pieces", async (done) => {
    const res = await helper.apiServer.get(`${urlList}`);
    expect(res.status).toBe(200);
    done();
  });
});

jest.useFakeTimers();
describe("Returns status 201 when inserting a new part", () => {
  it("You must insert a new part", async (done) => {
    try {
      const res = await helper.apiServer.post(`${urlinsert}`).send({
        os: _os,
        nome: "Peça teste",
        descricao: "Teste de registro",
        peso: 1.25,
        datafabricacao: "2020-05-19",
      });
      expect(res.status).toBe(201);
      _id = res.body._id;
      done();
    } catch (e) {
      // console.log(e);
    }
  });
});

jest.useFakeTimers();
describe("Returns status 409 when inserting a part with OS already registered", () => {
  it("A duplicate part message must be returned wih status 409", async (done) => {
    try {
      const res = await helper.apiServer.post(`${urlinsert}`).send({
        os: _os,
        nome: "Peça teste",
        descricao: "Teste de registro",
        peso: 1.25,
        datafabricacao: "2020-05-19",
      });
      expect(res.status).toBe(409);
      done();
    } catch (e) {
      // console.log(e);
    }
  });
});

jest.useFakeTimers();
describe("Returns status 200 when searching for a part by id", () => {
  it("Must return status 200 with the json selected by id", async (done) => {
    // try {
    //   const buscaId = await helper.apiServer.get(`${urlSelectByOs}/999`);
    //   const id = buscaId.body._id;
    try {
      const res = await helper.apiServer.get(`${urlRegisterId}/${_id}`);
      expect(res.status).toBe(200);
      done();
    } catch (error) {
      // console.log(error);
    }
    // } catch (e) {
    //   // console.log(e);
    // }
  });
});

jest.useFakeTimers();
describe("Returns status 200 when changing data for a registered part", () => {
  it("must return status 200 with the changed json", async (done) => {
    // try {
    //   const buscaId = await helper.apiServer.get(`${urlSelectByOs}/999`);
    //   let id = buscaId.body._id;
    try {
      const res = await helper.apiServer.put(`${urlRegisterId}/${_id}`).send({
        os: _os,
        nome: "Peça jest teste",
        descricao: "Peça alterada com jest teste",
        peso: 1.567,
        datafabricacao: "0",
      });
      expect(res.status).toBe(200);
      done();
    } catch (error) {
      // console.log(error);
    }
    // } catch (e) {
    //   // console.log(e);
    // }
  });
});

jest.useFakeTimers();
describe("returns status 200 when deleting a piece by id", () => {
  it("Must delete a piece by id", async (done) => {
    try {
      const buscaId = await helper.apiServer.get(`${urlSelectByOs}/${_os}`);
      let id = buscaId.body._id;
      try {
        const res = await helper.apiServer.delete(`${urlRegisterId}/${id}`);
        expect(res.status).toBe(200);
        done();
      } catch (error) {
        // console.log(error);
      }
    } catch (e) {
      // console.log(e);
    }
  });
});
