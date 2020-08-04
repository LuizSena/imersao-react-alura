import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import ButtonLink from "../ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/" title="logo LearningFlix">
        <img className="Logo" src={Logo} alt="logo - LearnignFlix"></img>
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
     </ButtonLink>
    </nav>
  );
}

export default Menu;
