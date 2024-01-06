const GetPokemonIdFromUrl = (url) => {
  const index = url.match('=').index

  return url.slice(index + 1);
  // return Number(url.slice(index + 1));
}
