export function division(dividende: number, diviseur: number) {
  if (diviseur == 0) {
    throw new Error("Le diviseur ne peut pas être égal à 0");
  }

  return dividende / diviseur;
}
