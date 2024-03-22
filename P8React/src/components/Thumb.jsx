import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Thumb ({logements}) {
    return (
        logements.map((logement) =>(
            <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
            </Link>
        ) )
      
    );
  };
  
  Thumb.propTypes ={
    logements: PropTypes.array.isRequired
  }
  export default Thumb;