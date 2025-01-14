import { login } from './api.js';

document.getElementById('form-login').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const resultado = await login(email, senha);
  document.getElementById('mensagem').innerText = resultado.mensagem || 'Login realizado com sucesso!';
});
