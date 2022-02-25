const getProducts = async (query) => {
  const PRODUCTS_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(PRODUCTS_URL);
  const { results } = await response.json();
  return results;
}

export default getProducts;
