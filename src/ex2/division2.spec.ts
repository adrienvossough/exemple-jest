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

  // https://fr.wikipedia.org/wiki/Division_par_z%C3%A9ro
  test("Diviser 100 par 0 donne bien l'infini", () => {
    const resultat = division(100, 0);
    expect(resultat).toBe(Infinity);
  });
});
