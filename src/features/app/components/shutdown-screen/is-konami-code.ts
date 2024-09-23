export function isKonamiCode(keys: string[]): boolean {
  return (
    keys.join(" ") ===
    "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a Enter"
  );
}
