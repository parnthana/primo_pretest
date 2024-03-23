export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const merged: number[] = [];
  let i = 0,
    j = 0,
    k = 0;
  while (
    i < collection1.length ||
    j < collection2.length ||
    k < collection3.length
  ) {
    const min1 =
      i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
    const min2 =
      j < collection2.length
        ? collection2[collection2.length - j - 1]
        : Number.POSITIVE_INFINITY;
    const min3 =
      k < collection3.length ? collection3[k] : Number.POSITIVE_INFINITY;

    if (min1 <= min2 && min1 <= min3) {
      merged.push(min1);
      i++;
    } else if (min2 <= min1 && min2 <= min3) {
      merged.push(min2);
      j++;
    } else {
      merged.push(min3);
      k++;
    }
  }
  return merged;
}
