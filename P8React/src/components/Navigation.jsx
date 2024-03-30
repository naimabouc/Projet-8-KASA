

import { NavLink } from "react-router-dom";
function Navigation () {
    return (
        <nav>
            <ul>
              <NavLink to ="/" className={({isActive}) => (isActive ? "underline" : "")}>
                  <li>Accueil</li>
              </NavLink>
              <NavLink to ="/about" className={({isActive}) => (isActive ? "underline" : "")}> 
                  <li>A propos</li>
              </NavLink> 
               
            </ul>
        </nav>  
        );
};
export default Navigation;