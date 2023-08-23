export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=a65b90bb&app_key=c9c05b7fae0194c0218e83c4bcef147f&from=0&to=${limit}&`;

  const response = await fetch(url);

  const data = await response.json();

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=a65b90bb&app_key=c9c05b7fae0194c0218e83c4bcef147f`;

  const response = await fetch(url);

  const data = await response.json();

  return data[0];
}
