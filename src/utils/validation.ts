const hexColorRegex = /^#(([0-9a-fA-F]{2}){3})$/;
export const allowedSymbolsRegex = /^#?[A-Fa-f0-9]*$/;

export const addHashtag = (clr: string) => {
  if (clr[0] === "#") {
    return clr;
  }
  return ["#", ...clr].join("");
};

export const validateHEXcolor = (clr: string): boolean =>
  !!addHashtag(clr).match(hexColorRegex);
