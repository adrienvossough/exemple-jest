import { Mock, It, Times } from "moq.ts";
import { Piece } from "./Piece";
import { Echiquier } from "./Echiquier";

function mockPiece() {
  const mock = new Mock<Piece>()
    .setup((instance) => instance.getCouleur())
    .returns("blanc")
    .setup((instance) => instance.getNom())
    .returns("pion");

  return mock.object();
}

describe("Tests de l'échiquier'", () => {
  let echiquier: Echiquier;
  let piece: Piece;

  beforeEach(() => {
    echiquier = new Echiquier(8, 8);
    piece = mockPiece();
  });

  test("La taille de l'échiquier ne doit pas changer s'il est déjà initialisé", () => {
    expect(() => {
      echiquier.setTaille(8, 8);
    }).toThrow(Error);
  });

  test("la taille de l'échiquier doit être supérieure à 0", () => {
    expect(() => {
      echiquier.setTaille(0, 8);
    }).toThrow(Error);
  });

  test("Récupérer la taille de l'échiquier", () => {
    const taille = echiquier.getTaille();
    expect(taille).toEqual([8, 8]);
  });

  test("L'échiquier doit avoir 64 cases", () => {
    const tableau = echiquier.getTableau();
    const cases = tableau.length * tableau[0].length;
    expect(cases).toEqual(64);
  });

  test("L'échiquier doit avoir 8 lignes", () => {
    const tableau = echiquier.getTableau();
    const lignes = tableau.length;
    expect(lignes).toEqual(8);
  });

  test("L'échiquier doit avoir 8 colonnes", () => {
    const tableau = echiquier.getTableau();
    const colonnes = tableau[0].length;
    expect(colonnes).toEqual(8);
  });

  test("L'échiquier doit avoir les pieces dans les bonnes cases", () => {
    echiquier.setPiece(piece, 1, 1);
    const pieceSurPlateau = echiquier.getPiece(1, 1);
    expect(pieceSurPlateau).toEqual(piece);
  });

  test("L'échiquier doit retourner une erreur si la case n'existe pas", () => {
    expect(() => {
      echiquier.setPiece(piece, 9, 9);
    }).toThrow(Error);
  });

  test("L'échiquier doit retourner une erreur si la case est déjà occupée", () => {
    echiquier.setPiece(piece, 1, 1);
    expect(() => {
      echiquier.setPiece(piece, 1, 1);
    }).toThrow(Error);
  });
});
