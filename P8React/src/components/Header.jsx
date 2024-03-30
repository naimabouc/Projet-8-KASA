import logoKasa from "../assets/images/logo.png";
import Navigation from "./Navigation";
import "../sass/header.scss";


function Header (props) {
    return (
      <div className="header">
        <img src={logoKasa} alt="logo kasa" />
        <Navigation />
        
      </div>
    );
  };
  
  export default Header;