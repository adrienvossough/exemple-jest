import { division } from "./division";

describe("Test de la fonction division", () => {
  test("diviser avec deux chiffres", () => {
    const resultat = division(4, 2);
    expect(resultat).toBe(2);
  });

  const cases = [
    [4, 2, 2], // SIMPLE !
    [9, 3, 3],
    [-4, 2, -2],
    [-6, -2, 3],
    [0, -2, -0], // BIZARRE !
    [0, 10, 0], // BIZARRE !
  ];

  test.each(cases)(
    "Avec comme dividende %p et %p comme diviseur, cela doit donner %p",
    (dividende, diviseur, resultatAttendu) => {
      const result = division(dividende, diviseur);
      expect(result).toEqual(resultatAttendu);
    }
  );

  test("Diviser 100 par 0 retourne une erreur", () => {
    expect(() => {
      division(100, 0);
    }).toThrow(Error)
  });
});
