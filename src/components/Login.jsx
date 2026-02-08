import { useState } from "react";
import { authorize } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function Login({ setToken }) {
  const [nome, setNome] = useState(""); // agora é só uma string
  const [senha, setSenha] = useState(""); // agora é só uma string
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!nome || !senha) return;

    authorize({ name: nome, password: senha })
      .then((data) => {
        // se a resposta do backend for positiva entra aqui
        // data é o objeto recebido do backend ex: {toke:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
        // Salva o JWT no sessionStorage e no estado
        // console.log("token = ", data.token);
        sessionStorage.setItem("token", data.token); // sessionStorage.getItem("chave", "valor")
        setToken(data.token); // atualiza a variável de estado 'token' para 'data.token'
        setError(""); // atualiza a variável de estado 'error' para vazio
        navigate("/index");
      }) // se a resposta do backend for negativa entra aqui
      .catch((err) => setError(err)); // 'setError' recebe o 'res' com a mensagem de erro e atualiza o estado 'error'
  };

  return (
    <div className="page">
      <div className="page_content">
        <p className="form_title">Login</p>
        <form className="form_content" onSubmit={handleLogin}>
          <label className="form_label">Nome</label>
          <input
            className="form_input"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label className="form_label">Senha</label>
          <input
            className="form_input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button className="form_content__button-submit" type="submit">
            Login
          </button>
          {error && <p className="error">{error}</p>}{" "}
          {/*se o estado 'error' for vazio, não faz nada, caso contrário imprime o valor da variável de estado na tela*/}
        </form>

        <div className="login__signup">
          <p>Ainda não se cadastrou?</p>
          <Link to="/cadastro" className="signup__link">
            Cadastre-se aqui
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
