import React from "react";
import ReactDOM from "react-dom/client";
import one from './one.jpg';
import download from './download.png';


// const Head=()=>
//     (
//     <h1>Namaste React</h1>
//     );

// const Title=()=>
//     (
//     <div>
//         {Head()}
//     <h1>Hlo bacchon</h1>
//     <h2>Kaise ho</h2>
//     </div>
//     );
const Header=()=>
(
<div class="box">
   <div >
    <img class="image1" src={one} />
   </div>
   <div class="search">
     <input type="search"></input>
   </div>
   <div>
    <img class="image2" src={download} />
   </div>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
