export function truncate(str: string, max?: number, sep?: string) {
  // Default to 10 characters
  max = max || 32;

  let len = str.length;
  if (len > max) {
    // Default to elipsis
    sep = sep || "...";

    let seplen = sep.length;

    // If seperator is larger than character limit,
    // well then we don't want to just show the seperator,
    // so just show right hand side of the string.
    if (seplen > max) {
      return str.slice(len - max);
    }

    // Half the difference between max and string length.
    // Multiply negative because small minus big.
    // Must account for length of separator too.
    let n = -0.5 * (max - len - seplen);

    // This gives us the centerline.
    let center = len / 2;

    let front = str.slice(0, center - n);
    let back = str.slice(len - center + n); // without second arg, will automatically go to end of line.

    return front + sep + back;
  }

  return str;
}
