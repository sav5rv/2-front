const API_BASE_URL = 'http://localhost:3000';

async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      alert('Login realizado com sucesso!');
      localStorage.setItem('token', data.token);
      window.location.href = 'list-access.html';
    } else {
      alert(data.erro || 'Erro ao realizar login');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar com o servidor.');
  }
}

// Usando a função na página de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  login(email, password);
});


export async function cadastrarUsuario(nome, email, senha) {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha }),
  });
  return response.json();
}

export async function loginUsuario(email, senha) {
    const response = await fetch(`${API_URL}/usuarios/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    return response.json();
  }
  
  export async function enviarEmailRecuperacao(email) {
    const response = await fetch(`${API_URL}/usuarios/recuperar-senha`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return response.json();
  }
  