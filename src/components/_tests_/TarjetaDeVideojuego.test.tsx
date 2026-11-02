import { render } from "@testing-library/react-native";
import TarjetaDeVideojuego from "../TarjetaDeVideojuego";

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("test 2_TarjetaDeVideojuego", () => {
  it("verifica que el titulo aparesca en pantalla", async () => {
    const { getByText } = await render(
      <TarjetaDeVideojuego
        titulo="Hitman"
        genero="Acción / Sigilo"
        plataformas="PC - PlayStation - Xbox"
        año="2016"
        desarrollador="IO Interactive"
        descripcion="Sos el Agente 47."
        imagen={{ uri: "https://ejemplo.com/hitman.png" }}
      />
    );

    expect(getByText("Hitman")).toBeTruthy();
  });
});