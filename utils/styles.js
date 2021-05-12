export const responsive = (medium, large, extraLarge) => {
  const md = medium;
  const lg = large ?? md;
  const xl = extraLarge ?? lg;
  return { md, lg, xl };
};
