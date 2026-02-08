const BASE_URL = "https://login-backend-psv4.onrender.com";

export function register({ nome, senha }) {
  return fetch(`${BASE_URL}/cadastro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nome, password: senha }),
  }).then((res) => {
    if (!res.ok) return Promise.reject("Erro ao cadastrar");
    return res.json();
  });
}

export function authorize({ name, password }) {
  return fetch(`${BASE_URL}/login`, {
    method: "POST", // faz uma requisição POST para a URL do backend acima com o objeto name e password
    headers: { "Content-Type": "application/json" }, // o header diz ao backend estou enviando JSON
    body: JSON.stringify({ name, password }), // converte objeto em JSON e envia no corpo da requisição (body) para o backend este JSON name e password
  }).then((res) => {
    // frontend lê o que o backend respondeu
    if (!res.ok) return Promise.reject("Usuário ou senha inválidos"); // se a resposta do backend for negativa, envia para o frontend o texto
    return res.json(); // aqui vem do backend JSON ex: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."} e converte em objeto {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
    // Frontend recebe o JSON do backend e converte em objeto
  });
}
