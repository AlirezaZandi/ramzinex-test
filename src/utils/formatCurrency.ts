const formatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

export const formatCurrency = (value: number) => {
  return formatter.format(value);
};
