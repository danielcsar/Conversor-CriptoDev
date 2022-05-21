let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

  describe("/POST teste", () => {
    let bodyJSON = {
      rgb: "255,255,255",
      hex: "#ffffff"
    };

    it("it should GET all the books", (done) => {
      chai
        .request("http://localhost:8080")
        .post("/teste").send(bodyJSON)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("array");
          // res.body.should.have.property("#ffffff");
          // res.body.should.have.property("255,255,255");
        done();
      });
    });
  });
