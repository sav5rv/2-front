import { enviarEmailRecuperacao, verificarEmailExistente } from './api.js';

document.getElementById('form-redefinir-senha').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Verificar se o e-mail existe no banco de dados
  const existeEmail = await verificarEmailExistente(email);

  if (!existeEmail) {
    document.getElementById('mensagem').innerText = 'E-mail não encontrado no sistema!';
    return;
  }

  // Caso o e-mail exista, enviar o e-mail de recuperação
  const resultado = await enviarEmailRecuperacao(email);
  document.getElementById('mensagem').innerText = resultado.mensagem || 'E-mail de recuperação enviado!';
});
