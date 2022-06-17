import { Piece, PieceEchiquier } from "./Piece";

describe("Tests de la Piece", () => {
  let piece: Piece;

  beforeAll(() => {
    piece = new PieceEchiquier("pion", "blanc");
  });

  const noms = [
    ["pion", "pion"],
    ["tour", "tour"],
    ["cavalier", "cavalier"],
    ["fou", "fou"],
    ["roi", "roi"],
    ["reine", "reine"],
  ];
  test.each(noms)(
    "Pour le nom %p, la piece doit avoir le nom %p",
    (nom, nomAttendu) => {
      piece.setNom(nom);
      expect(piece.getNom()).toEqual(nomAttendu);
    }
  );

  const nomsFaux = ["", undefined, null, "kfdsdlmkgkfgkdfmlgkdfgmlkdfgmldf"];
  test.each(nomsFaux)("Pour le nom %p, nous devons avoir une erreur", (nom) => {
    expect(() => {
      piece.setNom(nom);
    }).toThrow(Error);
  });

  const couleurs = [
    ["blanc", "blanc"],
    ["noir", "noir"],
  ];
  test.each(couleurs)(
    "Pour la couleur %p, la piece doit avoir la couleur %p",
    (couleur, couleurAttendue) => {
      piece.setCouleur(couleur);
      expect(piece.getCouleur()).toEqual(couleurAttendue);
    }
  );

  const couleursFaux = ["", undefined, null, "kfdsdlmkgkfgkdfmlgkdfgmldf"];
  test.each(couleursFaux)(
    "Pour la couleur %p, nous devons avoir une erreur",
    (couleur) => {
      expect(() => {
        piece.setCouleur(couleur);
      }).toThrow(Error);
    }
  );
});
// Language: typescript
