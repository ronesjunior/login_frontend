import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

export default function Cadastro() {
  const [nome, setNome] = useState(""); // nome, setNome são string
  const [senha, setSenha] = useState(""); // senha, setSenha são string
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    register({ nome, senha }) // transforma o 'nome' e 'senha' do usestate de string para objeto, usando {}. Ficaria {nome: Rones, senha: 123}. Envia para a função 'register' este objeto, por isso dentro de {}.'nome' e 'senha' contém o texto digitado no input
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Erro no cadastro:", err);
      });
  };

  return (
    <div className="page">
      <div className="page_content">
        <p className="form_title">Cadastro</p>
        <form className="form_content" onSubmit={handleSubmit}>
          <label className="form_label">Nome</label>
          <input
            className="form_input"
            type="text"
            placeholder="Nome"
            value={nome} // o 'nome' é o valor atual do 'usestate', ou seja, no início é ""
            onChange={(e) => setNome(e.target.value)} // Depois que o usuário digita no input, o onChange é executado e o 'setNome' atualiza o estado 'nome'.
            required
          />
          <label className="form_label">Senha</label>
          <input
            className="form_input"
            type="password"
            placeholder="Senha"
            value={senha} // a 'senha' é o valor atual do 'usestate', ou seja, no início é ""
            onChange={(e) => setSenha(e.target.value)} // Depois que o usuário digita no input, o onChange é executado e o 'setSenha' atualiza o estado 'senha'.
            required
          />

          <button className="form_content__button-submit" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="login__back">
          <Link to="/login" className="back__link">
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
}
