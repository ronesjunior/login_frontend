import { Link } from "react-router-dom";
import "../landing.css";

function Landing() {
  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <h1>Bem-vindo ao MeuApp 🚀</h1>
        <p>Uma aplicação simples, rápida e segura com login JWT e React.</p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h3>🔐 Seguro</h3>
          <p>Autenticação com JWT e rotas protegidas.</p>
        </div>

        <div className="feature">
          <h3>⚡ Rápido</h3>
          <p>Frontend em React e backend em Node.js.</p>
        </div>

        <div className="feature">
          <h3>📦 Simples</h3>
          <p>Código limpo e fácil de entender.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 - MeuApp. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Landing;
