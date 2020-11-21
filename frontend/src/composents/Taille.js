import React from"react";
import { Button } from '@material-ui/core';



const Tailles = ()=> {
 const [taille, setTaille] = React.useState(20)

    return(
        <div>
         <Button color="primary" onClick={() => setTaille(taille - 5)}>Retrecir</Button>
         <Button color="primary" onClick={() => setTaille(taille + 5)}>Agrandir</Button>
         <p style={{fontSize: `${taille}px`}}>Taille = {taille}px</p>

         </div>
    );
};
export default Tailles
