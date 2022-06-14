import React from 'react';
import coverImg from "../../img/aboutMe.jpeg"

export default function About() {
  return (
    <div className='my-5'>
         <h1>Who am I?</h1>
         <img src={coverImg} className="my-2" style={{ width: "100%" }} alt="cover" />
     
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
