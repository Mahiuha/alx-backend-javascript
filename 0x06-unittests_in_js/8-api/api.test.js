const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET /", () => {
  it("/ correct status, result", () => {
    chai
      .request("http://localhost:7865")
      .get("/")
      .end((err, res) => {
        if (err) throw err;
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(res.text).to.equal("Welcome to the payment system");
      });
  });
});
