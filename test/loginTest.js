const jwt = require("jsonwebtoken");

describe("POST /api/users/login", () => {
  it("Debería loguear con credenciales válidas", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "demo@email.com",
      password: "123456",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(() => jwt.verify(res.body.token, process.env.JWT_SECRET)).not.toThrow();
  });

  it("Debería fallar con credenciales incorrectas", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "demo@email.com",
      password: "wrongpass",
    });
    expect(res.statusCode).toBe(401);
  });
});
