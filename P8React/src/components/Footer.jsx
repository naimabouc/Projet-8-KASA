import logoFooter from "../assets/images/Logofooter.png";
import "../sass/footer.scss"
function Footer () {
    return (    
        <footer className="footer">
            <img src={logoFooter} alt="image " />
            <p className="text-copyright">
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
            )
        }

export default Footer;