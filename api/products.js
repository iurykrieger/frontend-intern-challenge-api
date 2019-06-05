const availableIds = [
  6624363,
  6829307,
  6506376,
  6875461,
  6584703,
  6670538,
  6829158,
  6747399,
  6670538,
  6829158,
  6747399,
  6124117,
  5783178
]

function getRandomBetween (min, max) {
  return Math.round(Math.random() * (+max - +min) + +min)
}

function getRandomId () {
  return availableIds[Math.floor(Math.random() * availableIds.length)];
}

function generateProduct (id) {
  const oldPrice = getRandomBetween(100, 450)
  const price = oldPrice - getRandomBetween(10, 50)
  return {
    id,
    name: `Product Number ${id}`,
    image: `//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=${getRandomId()}`,
    oldPrice,
    price
  }
}

function generateProductsByPage (page = 1) {
  const products = []
  for (let index = 0; index < 8; index++) {
    products.push(generateProduct(index + ((page - 1) * 10)))
  }
  return products
}

module.exports = {
  generateProductsByPage
}
