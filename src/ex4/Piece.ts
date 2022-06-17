/**
 * Piece de base pour l'échiquier
 * @interface Piece
 */
export interface Piece {
  /**
   * retourne le nom de la piece
   * @returns string Nom de la piece
   */
  getNom(): string;
  /**
   * Modifie le nom de la piece
   * @param nom Nom de la piece
   */
  setNom(nom: string): void;
  /**
   * Retourne la couleur de la piece
   * @returns string Couleur de la piece
   */
  getCouleur(): string;
  /**
   * Permet de choisir la couleur de la piece entre blanc et noir
   * @param couleur Couleur de la piece
   */
  setCouleur(couleur: string): void;
}

export class PieceEchiquier implements Piece {
  private couleur: string;
  /**
   * @param nom Nom de la piece
   */
  constructor(private nom: string, couleur: string) {
    this.setCouleur(couleur);
  }

  setNom(nom: string) {
    if (nom.length > 0 && nom.length < 10) {
      this.nom = nom;
    } else {
      throw new Error("Le nom est invalide");
    }
  }

  getNom() {
    return this.nom;
  }

  setCouleur(couleur: string) {
    if ((couleur.length && couleur === "blanc") || couleur === "noir") {
      this.couleur = couleur;
    } else {
      throw new Error("La couleur est invalide");
    }
  }

  getCouleur() {
    return this.couleur;
  }
}
