import { cadastrarUsuario } from './api.js'; // Use caminhos relativos com "./" ou "../"
import { validarEmail, validarSenha } from './valida.js';

document.getElementById('form-cadastro').addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  const mensagem = document.getElementById('mensagem');
  mensagem.innerHTML = '';

  if (!nome) {
    mensagem.innerText = 'O campo Nome é obrigatório.';
    return;
  }
  
  if (!validarEmail(email)) {
    mensagem.innerText = 'Por favor, insira um e-mail válido.';
    return;
  }

  if (!validarSenha(senha)) {
    mensagem.innerText = 'A senha deve ter pelo menos 6 caracteres.';
    return;
  }

  try {
    const resultado = await cadastrarUsuario(nome, email, senha);
    if (resultado.erro) {
      mensagem.innerText = `Erro: ${resultado.erro}`;
    } else {
      mensagem.innerText = 'Usuário cadastrado com sucesso!';
    }
  } catch (error) {
    mensagem.innerText = 'Erro inesperado ao tentar cadastrar. Tente novamente mais tarde.';
  }
});
