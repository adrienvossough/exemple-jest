import { direBonjour } from "./bonjour";

describe("Liste des tests sur la fonction bonjour", () => {

  test("Devrait dire bonjour", () => {
    const resultat = direBonjour("Adrien");
    expect(resultat).toBe("Bonjour Adrien");
    
  });
});
