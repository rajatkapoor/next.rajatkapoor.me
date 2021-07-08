const responsive = (base, medium, large, extraLarge) => {
  const md = medium;
  const lg = large ?? md;
  const xl = extraLarge ?? lg;
  return { base, md, lg, xl };
};
