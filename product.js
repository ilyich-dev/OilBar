const container = document.getElementById("productContainer");
const product = JSON.parse(localStorage.getItem("selectedProduct"));

let currentProduct = null;

async function renderProduct() {
  if (!product) {
    container.innerHTML = "<p>Товар не найден. Вернитесь на главную.</p>";
    return;
  }

  currentProduct = product;

  container.innerHTML = `
    <div class="product-detail">
      <img src="${currentProduct.image}" alt="${currentProduct.name}" class="product-detail-img">
      <h2 class="product-detail-name">${currentProduct.name}</h2>
      <p class="product-detail-price">${currentProduct.price} ₸</p>
      <p class="${currentProduct.inStock ? "in-stock" : "out-of-stock"}">
        ${currentProduct.inStock ? "В наличии" : "Нет в наличии"}
      </p>
      <p class="product-description">${currentProduct.description || "Описание временно отсутствует."}</p>

      <div class="product-contact">
        <p class="phone">☎️ +7 (705) 462-51-58</p>
        <p class="warning">⚠️ Заказ осуществляется по телефону. Уточняйте наличие и цену на товар у продавца</p>
      </div>
    </div>
  `;
}

renderProduct();