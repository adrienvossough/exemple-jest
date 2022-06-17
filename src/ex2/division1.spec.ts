import { division } from "./division";

describe("Test de la fonction division", () => {
  test("diviser avec deux chiffres", () => {
    const resultat = division(4, 2);
    expect(resultat).toBe(2);
  });
});
