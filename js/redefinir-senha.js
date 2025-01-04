import { enviarEmailRecuperacao } from './api.js';

document.getElementById('form-redefinir-senha').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  const resultado = await enviarEmailRecuperacao(email);
  document.getElementById('mensagem').innerText = resultado.mensagem || 'E-mail de recuperação enviado!';
});
