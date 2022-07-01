import React from "react";
import PHOTO from '../../img/picturesOfMe/selfie.jpeg';

export default function Home() {
    return (
    <div className="container">
        <div className="row">
         <div className="col-sm">
         <div className="circular--landscape my-5 float-right"> <img src={PHOTO} className="rounded mx-auto d-block"/>
         </div>

         
        
             <p className="text-animation">
               Hello I'm Aida
           </p>

     </div>
     </div>
    </div>

  
    )
}
