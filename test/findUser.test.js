import request from "supertest";
import app from "../server.js"; 

describe("GET /api/users/:id", () => {
  it("Debería devolver un usuario si existe", async () => {
    const res = await request(app).get("/api/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
  });

  it("Debería devolver 404 si el usuario no existe", async () => {
    const res = await request(app).get("/api/users/99999");
    expect(res.statusCode).toBe(404);
  });
});

