export function filterData(searchTxt, restaurant) {
  console.log(searchTxt, restaurant);
  const data = restaurant.filter((r) =>
    r["data"]["name"].toLowerCase().includes(searchTxt.toLowerCase())
  );
  return data;
}
