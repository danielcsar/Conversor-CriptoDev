const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');

chai.use(chaiHttp);

  describe("/POST conversões", () => {
    let params = {
      rgb: "255,255,255",
      hex: "#ffffff"
    };

    it("Rgb to Hex", (done) => {
      chai
        .request(server.app)
        .post("/rgbToHex").send(params)
        .end((err, res) => {

          chai.expect(err).to.be.null; // Sem erros
          chai.expect(res).to.have.status(200); // StatusCode          
          chai.expect(res.body).to.contains(params.hex);
        done();
      });
    });

    it("Hex to Rgb", (done) => {
      chai
        .request(server.app)
        .post("/hextoRgb").send(params)
        .end((err, res) => {

          chai.expect(err).to.be.null; // Sem erros
          chai.expect(res).to.have.status(200); // StatusCode          
          chai.expect(res.body).to.contains(params.rgb);
        done();
      });
    });
  });
