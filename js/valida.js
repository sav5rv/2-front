/* document.getElementById('loginForm').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      e.preventDefault();
      alert('Todos os campos são obrigatórios.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      e.preventDefault();
      alert('Por favor, insira um e-mail válido.');
    }
  }); */

// Validações básicas
export function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
export function validarSenha(senha) {
    return senha.length >= 6;
  };
  