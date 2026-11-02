describe("Buscador de videojuegos", () => {
  it("encuentra una palabra dentro del título", () => {
    const titulo = "Forza Horizon 5";
    const busqueda = "forza";

    const resultado = titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    expect(resultado).toBe(true);
  });
});