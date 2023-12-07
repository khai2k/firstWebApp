const chai = require("chai");
const supertest = require("supertest");
const app = require("../app"); // Assuming your Express app is in the "app.js" file

const expect = chai.expect;
const request = supertest(app);

describe("GET /", function () {
  it("responds with HTML and a  title", function (done) {
    request
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .end(function (err, res) {
        if (err) return done(err);

        // You can add more specific assertions here if needed
        expect(res.text).to.include("<title>Express</title>");

        done();
      });
  });
});
