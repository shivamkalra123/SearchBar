export const toFirstCharUppercase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

/* export const getValueByKey = (type:string) => {
  const colors = {
    rock: "#b69e31",
    ghost: "#70559b",
    steel: "#b7b9d0",
    water: "#6493eB",
    grass: "#74cb48",
    psychic: "#fb5584",
    ice: "#9ad6df",
    dark: "#75574c",
    fairy: "#e69eac",
    fighting: "#c12239",
    flying: "#a891ec",
    poison: "#a43e9e",
    ground: "#dec16b",
    bug: "#a7b723",
    fire: "#f57d31",
    electric: "#f9cf30",
    dragon: "#7037ff",
  };
  return colors[type as keyof typeof colors];
};
 */