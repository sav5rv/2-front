$(document).ready(function () {
    $('#tabelaUsuarios').DataTable({
      ajax: '/api/usuarios', // Substitua pela URL da sua API
      columns: [
        { data: 'id' },
        { data: 'nome' },
        { data: 'email' },
        { data: 'status' },
        { data: 'perfil' },
        {
          data: null, // Coluna para ações
          render: function (data, type, row) {
            return `
              <button class="btn-editar" data-id="${row.id}">Editar</button>
              <button class="btn-excluir" data-id="${row.id}">Excluir</button>
            `;
          }
        }
      ],
      responsive: true, // Responsividade automática
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json' // Tradução para português
      },
      paging: true,
      searching: true,
      info: true,
      lengthChange: true,
      order: [[0, 'asc']] // Ordenação padrão por ID
    });
  
    // Evento para editar usuário
    $('#tabelaUsuarios tbody').on('click', '.btn-editar', function () {
      const id = $(this).data('id');
      alert(`Editar usuário com ID: ${id}`);
      // Implemente aqui a lógica para abrir um modal ou redirecionar para outra página
    });
  
    // Evento para excluir usuário
    $('#tabelaUsuarios tbody').on('click', '.btn-excluir', async function () {
      const id = $(this).data('id');
      const confirmed = confirm(`Tem certeza de que deseja excluir o usuário com ID: ${id}?`);
      if (confirmed) {
        try {
          const response = await fetch(`/api/usuarios/${id}`, { method: 'DELETE' });
          if (response.ok) {
            alert('Usuário excluído com sucesso!');
            $('#tabelaUsuarios').DataTable().ajax.reload(); // Recarregar a tabela
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
  