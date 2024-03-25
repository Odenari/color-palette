export function exhaustiveCheck(t: never) {
  if (t) throw new Error('Unexpected input type');
}
