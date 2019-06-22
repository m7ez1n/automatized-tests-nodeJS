const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authentication with valid credentials", async () => {
    const user = await User.create({
      name: "Rodrigo",
      email: "rodrigo@gmail.com",
      password: "123123"
    });
    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(response.status).toBe(200);
  });

  it("should not be to authentication with invalid credentials", async () => {
    const user = await User.create({
      name: "Rodrigo",
      email: "rodrigo@gmail.com",
      password: "123123"
    });
    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(401);
  });
});
