import Thumb from "../Thumb";
import logements from "../../data/logements.json";
import Banner from "../BannerHome";
import Footer from "../Footer";

function Home () {
    return (
      <div className="home">
        <Banner />
          <div className="gallery"><Thumb logements={logements} /></div>
        <Footer />
      </div>
      
    
    );
  };
  
  export default Home;