import request from "supertest";
import app from "../server.js"; 

describe("Servidor funcionando", () => {
  it("Responde a la ruta principal", async () => {
    const res = await request(app).get("/api"); 
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("API funcionando correctamente ✅");
  });
});
