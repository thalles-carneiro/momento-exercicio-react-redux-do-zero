const getProducts = async () => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

export default getProducts;
