const hexColorRegex = /^#(([0-9a-fA-F]{2}){3})$/;
export const allowedSymbolsRegex = /^#?[A-Fa-f0-9]*$/;

export const validateHEXcolor = (color: string): boolean => {
  if (color[0] === "#") {
    return !!color.match(hexColorRegex);
  } else {
    const colorWithNumberSign = ["#", ...color].join("");
    console.log(colorWithNumberSign);
    return !!colorWithNumberSign.match(hexColorRegex);
  }
};
