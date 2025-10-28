document.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

    });
});

// Racional por trás do código:
// Bom, para a primeira linha estamos esperando a pág carregar totalmente.
// Dpois selecionamos tadas as classes(HMTL) 'needs-validation' do form.
// Faz a trasnfeencia de 'NodeList' pra um array que faz loop por cada form.
// Faz o evento de clickar e enviar.
//faz a verificação se o form é válido ou não.
// Se não for válido, fiz de uma forma para que não envie e não propague o form
// Adicionando a classe do boostrap que é usada para mostrar as mensagens de erro ou de sucesso.
// Esse false no final é mais para se referir a fase de captura do evento (padrãozão).

// ===============================================
// LÓGICA DE FILTRAGEM DO CATÁLOGO
// ===============================================

// Seleciona o container dos botões de filtro e todos os botões
const filterContainer = document.querySelector('.filter-buttons-container');
const filterButtons = document.querySelectorAll('.btn-primary-custom-filter');
const productCards = document.querySelectorAll('.produto'); // Seleciona todos os produtos

if (filterContainer && productCards.length > 0) {

    filterContainer.addEventListener('click', (event) => {
        // Garante que apenas o clique em botões seja processado
        if (event.target.classList.contains('btn-primary-custom-filter')) {
            
            const clickedButton = event.target;
            
            // 1. Limpar o estado 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Definir o botão clicado como 'active'
            clickedButton.classList.add('active');
            
            // 3. Obter a categoria que deve ser filtrada
            // Usamos o texto do botão para definir a categoria (ex: "Cardio", "Todos")
            const filterValue = clickedButton.textContent.toLowerCase().trim();

            // 4. Loop pelos cards de produto e aplica o filtro
            productCards.forEach(card => {
                const productCategory = card.getAttribute('data-category');
                
                // Remove a classe de exibição/ocultação do Bootstrap para resetar
                card.classList.remove('d-none', 'd-flex');

                if (filterValue === 'todos') {
                    // Se for "Todos", mostra o card (usa d-flex, que é o estilo padrão para mostrar)
                    card.classList.add('d-flex');
                } else if (productCategory === filterValue) {
                    // Se a categoria do produto for a mesma do filtro, mostra
                    card.classList.add('d-flex');
                } else {
                    // Se não for a categoria correta, esconde
                    card.classList.add('d-none');
                }
            });
        }
    });
}
// OBS: Utilizamos d-none (display: none) e d-flex (display: flex) do Bootstrap
// para esconder e mostrar os cards, respeitando o layout flexbox existente.
// --- Envio de formulário de orçamento ---
document.addEventListener('DOMContentLoaded', () => {
  const formOrcamento = document.getElementById('formOrcamento');
  if (!formOrcamento) return; // evita erro se o form não existir

  formOrcamento.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      mensagem: document.getElementById('mensagem').value,
    };

    try {
      const resposta = await fetch('/api/orcamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        alert('Orçamento enviado com sucesso!');
        formOrcamento.reset();
      } else {
        alert('Erro ao enviar orçamento.');
      }
    } catch (erro) {
      console.error('Erro ao enviar orçamento:', erro);
      alert('Erro de conexão com o servidor.');
    }
  });
});