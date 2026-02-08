import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/favicon.ico";
import "../NavBar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redireciona
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar__nav">
        <div>
          <NavLink to="/cadastro" className="navbar__link">
            Cadastro
          </NavLink>
        </div>
        <div>
          <NavLink to="/myprofile" className="navbar__link">
            Meu perfil
          </NavLink>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="navbar__link navbar__button"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
