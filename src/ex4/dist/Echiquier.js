"use strict";
exports.__esModule = true;
exports.Echiquier = void 0;
/**
 * Je veux que mon échiquier soit de 8 cases sur 8
 * Je veux que mon échiquier puisse contenir des pièces
 * Il n’est pas possible d’avoir plusieurs pièces sur la même case
 * Les oordonnées vont de 1 à 8
 * Les abscisses vont de 1 à 8
 */
var Echiquier = /** @class */ (function () {
    function Echiquier() {
        // échiquier de 8 sur 8
        this.tableau = Array.from(Array(8), function () { return new Array(8); });
    }
    Echiquier.prototype.getTaille = function () {
        var x = this.tableau.length;
        var y = this.tableau[0].length;
        return [x, y];
    };
    /**
     * Permet d'ajouter une piece sur une case de l'échiquier
     * @param piece Piece à placer
     * @param x Abscisse de la case comprise entre 1 et 8
     * @param y Ordonnée de la case comprise entre 1 et 8
     *
     * @throws Error Si la case n'est pas vide ou si la case n'existe pas
     */
    Echiquier.prototype.setPiece = function (piece, x, y) {
        // on vérifie si la case existe
        if (y > 0 && y <= 8 && x > 0 && x <= 8) {
            throw new Error("La case n'existe pas");
        }
        // on vérifie que la case est vide
        if (this.tableau[y - 1][x - 1]) {
            throw new Error("Il y a déjà une pièce sur cette case");
        }
        this.tableau[y - 1][x - 1] = piece;
    };
    Echiquier.prototype.getPiece = function (x, y) {
        return this.tableau[y - 1][x - 1];
    };
    Echiquier.prototype.getPlateau = function () {
        return this.tableau;
    };
    return Echiquier;
}());
exports.Echiquier = Echiquier;
