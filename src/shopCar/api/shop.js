const productsData = [
  {"id": 1, "title": "苹果", "price": 5, "inventory": 2},
  {"id": 2, "title": "香蕉", "price": 3, "inventory": 2},
  {"id": 3, "title": "橘子", "price": 6, "inventory": 2}
]

export const getAllProducts = callback => {
  setTimeout(function () {
    callback(productsData)
  }, 100)
}
