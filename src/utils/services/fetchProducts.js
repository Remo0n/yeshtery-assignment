export const fetchProducts = () => {
  const response = fetch("https://dummyjson.com/products").then((response) =>
    response.json()
  );

  return response;
};

export const fetchProductById = (id) => {
  const response = fetch(`https://dummyjson.com/products/${id}`).then(
    (response) => response.json()
  );

  return response;
};
