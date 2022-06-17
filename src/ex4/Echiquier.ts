import { Piece } from "./Piece";

/**
 * Plateau de jeu
 * @interface Plateau
 */
export interface Plateau {
  /**
   * Retourne une pièce du plateau à partir de ses coordonnées
   * @param x Coordonnée x de la piece
   * @param y Coordonnée y de la piece
   */
  getPiece(x: number, y: number): Piece | undefined;
  /**
   * Permet d'ajouter une piece sur une case de l'échiquier
   * @param piece Piece à placer
   * @param x Abscisse de la case comprise entre 1 et la hauteur max du tableau
   * @param y Ordonnée de la case comprise entre 1 et la largeur max du tableau
   *
   * @throws Error Si la case n'est pas vide ou si la case n'existe pas
   */
  setPiece(piece: Piece, x: number, y: number): void;
  /**
   * Retourne le plateau avec ses pieces
   *
   * @returns Array<Array<Piece>>
   */
  getTableau(): Piece[][];

  setTaille(x: number, y: number): void;
}

/**
 * Je veux que mon échiquier soit de 8 cases sur 8
 * Je veux que mon échiquier puisse contenir des pièces
 * Il n’est pas possible d’avoir plusieurs pièces sur la même case
 * Les oordonnées vont de 1 à 8
 * Les abscisses vont de 1 à 8
 */
export class Echiquier implements Plateau {
  private tableau: Piece[][];

  constructor(x: number, y: number) {
    this.setTaille(x, y);
  }

  setTaille(x: number, y: number) {
    if (this.tableau) {
      throw new Error("Le tableau existe déjà");
    }
    if (x < 1 || y < 1) {
      throw new Error("La taille de l'échiquier est invalide");
    } else {
      this.tableau = Array.from(Array<Piece>(x), () => new Array<Piece>(y));
    }
  }

  getTaille() {
    const x = this.tableau.length;
    const y = this.tableau[0].length;
    return [x, y];
  }

  setPiece(piece: Piece, x: number, y: number) {
    // on vérifie si la case existe
    if (
      x < 1 ||
      x > this.tableau.length ||
      y < 1 ||
      y > this.tableau[0].length
    ) {
      throw new Error("La case n'existe pas");
    }
    // on vérifie que la case est vide
    if (this.tableau[x - 1][y - 1]) {
      throw new Error("Il y a déjà une pièce sur cette case");
    }
    this.tableau[x - 1][y - 1] = piece;
  }

  getPiece(x: number, y: number): Piece {
    return this.tableau[x - 1][y - 1];
  }

  getTableau() {
    return this.tableau;
  }
}
