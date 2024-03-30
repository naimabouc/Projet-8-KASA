import { useState } from "react";



const Caroussel = ({images}) => {
  
const [currentPicture, setCurrentPicture] = useState(0);

const getClassName = (index) => {
 if (index === currentPicture) return "show";
 return "";
}
const Next = () => {
 setCurrentPicture((currentPicture + 1) % images.length)
}
const Prev =() => {
  const newCurrentPicture = currentPicture - 1;
    if(newCurrentPicture < 0) {
        setCurrentPicture(images.length - 1)
        return;
    }
    setCurrentPicture((currentPicture - 1 % images.length))
   
   };
  
 return (
     <div className="logement">
         <div className="pictures">
             
             {images.map((picture,index) => {
                return (
                   <img src={picture} alt="" key={(picture, index)} className={getClassName(index)}/>
                 );
               })}
                
         </div>
         
         <span className="fleches">
               <span>
                {images.length > 1 &&  (
                  <i onClick={Next} className="fa-solid fa-chevron-right Right"></i>
                  )}
               </span>
               
              <span>
                {images.length > 1 && (
              <i onClick={Prev} className="fa-solid fa-chevron-left Left"></i> 
                )}
              </span>
        </span>
              {images.length > 1 && (
              <span className="counter">{currentPicture + 1} / {images.length}</span>
              )}
         
         </div>
                  )
      
        

        
              
              }          
               
export default Caroussel;