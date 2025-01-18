document.addEventListener("DOMContentLoaded", async () => {
  const API_URL = "http://localhost:3000"; // Altere para a URL da sua API

  try {
    const tabela = $('#tabelaUsuarios').DataTable({
      ajax: `${API_URL}/usuarios/listar`, // Carregamento via AJAX
      columns: [
        { data: '_id' },
        { data: 'nome' },
        { data: 'email' },
        { data: 'status' },
        { data: 'perfil' },
        {
          data: null, // Coluna para ações
          render: function (data, type, row) {
            return `
              <button class="btn-editar" data-id="${row._id}">Editar</button>
              <button class="btn-excluir" data-id="${row._id}">Excluir</button>
            `;
          }
        }
      ],
      responsive: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json"
      },
      paging: true,
      searching: true,
      info: true,
      lengthChange: true,
      order: [[0, 'asc']] // Ordenação padrão por ID
    });
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
    alert("Erro ao carregar a lista de usuários. Tente novamente mais tarde.");
  }

  // Evento para editar usuário
  $('#tabelaUsuarios tbody').on('click', '.btn-editar', function () {
    const id = $(this).data('id'); // Captura o ID corretamente
    alert(`Editar usuário com ID: ${id}`);
    // Implemente aqui a lógica para abrir um modal ou redirecionar para outra página
  });

  // Evento para excluir usuário
  $('#tabelaUsuarios tbody').on('click', '.btn-excluir', async function () {
    const id = $(this).data('id'); // Captura o ID corretamente
    const confirmed = confirm(`Tem certeza de que deseja excluir o usuário com ID: ${id}?`);
    if (confirmed) {
      try {
        const response = await fetch(`${API_URL}/usuarios/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert('Usuário excluído com sucesso!');
          $('#tabelaUsuarios').DataTable().ajax.reload(); // Recarrega os dados da tabela
        } else {
          alert('Erro ao excluir o usuário.');
        }
      } catch (error) {
        console.error('Erro ao excluir o usuário:', error);
        alert('Erro ao excluir o usuário.');
      }
    }
  });
});
