export function stringToFloat(string: string): number | Error {
  const result = parseFloat(string);

  if (Number.isNaN(result)) {
    return new Error(`${string} cannot be converted to a float`);
  }

  return result;
}
