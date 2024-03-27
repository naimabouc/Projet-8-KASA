import { NavLink } from "react-router-dom";


function Error404  ()  {
  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ul>
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Error404;