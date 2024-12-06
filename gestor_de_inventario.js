const products = [
  {name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0},
  {name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10},
  {name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15},
  {name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0},
  {name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0},
  {name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5},
];

/** Ejercicio número 1 **/
const productsWithDiscount = products.filter(product => product.discount > 0);

console.log('productsWithDiscount:', productsWithDiscount);

/** Ejercicio número 2 **/
const productsWithPriceAfterDiscount = products
  .filter(product => product.discount > 0)
  .map(product => {
    const priceAfterDiscount = product.price * (1 - product.discount / 100);
    return { ...product, priceAfterDiscount };
  });

console.log('productsWithPriceAfterDiscount:', productsWithPriceAfterDiscount);

/** Ejercicio número 3 **/
const productsWithLowStock = [];
for (const product of products) {
  if (product.stock < 5) {
    productsWithLowStock.push(product);
  }
}

console.log('productsWithLowStock:', productsWithLowStock);

/** Ejercicio número 4 **/
function updateStock(productName, quantityToAdd) {
  try { 
    const product = products.find(product => product.name === productName);
    product.stock += quantityToAdd;
    console.log(El stock de ${productName} ha sido actualizado a ${product.stock}.);
  } catch (error) {
    console.error(error.message);
  }
}

updateStock("Leche", 10);

/** Ejercicio número 5 **/
const resumeCategory = {};

products.forEach(product => {
  const { category } = product;
  resumeCategory[category] = (resumeCategory[category] || 0) + 1;
});

console.log('resumeCategory:', resumeCategory);