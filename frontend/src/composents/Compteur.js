import React from"react";
import { Button } from '@material-ui/core';

function Compteur() {
    const[count, setCount] = React.useState(10)
    return(
        <div>
         <h1>{count}</h1>
         <Button color="primary" onClick = {()=>setCount(count + 1)}>Plus</Button>
         <Button color="primary" onClick = {()=>setCount(count - 1)}>Moins</Button>
        </div>
    );
    
};
export default Compteur
