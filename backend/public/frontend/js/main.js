const productsList = document.getElementById("products");
const form = document.getElementById("productForm");

const API_URL = "http://localhost:3000/api/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Falha ao buscar produtos");
    const products = await response.json();

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
    await fetchProducts();
  } catch (error) {
    console.error("Erro ao adicionar produto", error);
  }
});

fetchProducts();
