import { fireEvent, render } from "@testing-library/react-native";
import PantallaPrincipal from "../app/index";

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Test 3 - Buscador del catálogo", () => {
  it("escribe hit y muestra Hitman", async () => {
    const { getByTestId, findByText } = await render(
      <PantallaPrincipal />
    );

    await fireEvent.changeText(
      getByTestId("input-busqueda"),
      "Hit"
    );

    expect(await findByText("Hitman")).toBeTruthy();
  });
});