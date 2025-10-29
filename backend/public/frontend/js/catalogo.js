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
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formOrcamento');
  if (!form) {
    console.warn('Formulário de orçamento não encontrado — abortando listener.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nomeEl = form.querySelector('#nome');
    const emailEl = form.querySelector('#email');
    const mensagemEl = form.querySelector('#mensagem');

    if (!nomeEl || !emailEl || !mensagemEl) {
      console.error('Campos do formulário não encontrados:', { nomeEl, emailEl, mensagemEl });
      alert('Erro: campos do formulário ausentes. Recarregue a página e tente novamente.');
      return;
    }

    const nome = nomeEl.value.trim();
    const email = emailEl.value.trim();
    const mensagem = mensagemEl.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const resp = await fetch('/api/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, mensagem })
      });

      if (!resp.ok) {
        const txt = await resp.text().catch(() => null);
        console.error('Erro do servidor:', resp.status, txt);
        alert('Falha ao enviar orçamento. Tente novamente mais tarde.');
        return;
      }

      alert('Orçamento enviado com sucesso!');
      form.reset();
    } catch (err) {
      console.error('Erro de rede ao enviar orçamento:', err);
      alert('Erro de conexão. Verifique sua rede.');
    }
  });
});
