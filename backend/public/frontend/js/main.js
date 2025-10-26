// frontend/js/main.js

const productsList = document.getElementById("products");
const form = document.getElementById("productForm");

// 🔗 URL correta do backend Node.js
const API_URL = "http://localhost:3000/api/products";

// 🧠 Buscar produtos do banco
async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Falha ao buscar produtos");
    const products = await response.json();

    // Exibir produtos na tela
    productsList.innerHTML = products
      .map(
        (p) => `
          <li>
            <strong>${p.Name}</strong> — R$ ${p.Price.toFixed(2)}
            <br><small>${p.Description || ""}</small>
          </li>
        `
      )
      .join("");
  } catch (error) {
    console.error("Erro ao buscar produtos", error);
  }
}

// 💾 Adicionar produto novo
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = parseFloat(document.getElementById("price").value);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });

    if (!response.ok) throw new Error("Falha ao adicionar produto");

    form.reset();
    await fetchProducts(); // Recarrega lista
  } catch (error) {
    console.error("Erro ao adicionar produto", error);
  }
});

// 🚀 Carregar produtos ao abrir a página
fetchProducts();
