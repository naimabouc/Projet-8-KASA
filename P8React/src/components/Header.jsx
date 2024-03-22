import logoKasa from "../assets/images/logo.png";
import Navigation from "./Navigation";



function Header (props) {
    return (
      <div className="header">
        <img src={logoKasa} alt="logo kasa" />
        <Navigation />
        
      </div>
    );
  };
  
  export default Header