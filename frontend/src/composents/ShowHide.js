import React from"react";
import { Button } from '@material-ui/core';



const ShowHide = ()=> {
 const [show, setShow] = React.useState(true)

    return(
        <div>
         <h1> {show && "Hello"}</h1>
         <Button color="secondary" onClick = {() => setShow(!show)}>{show ? "Cacher" : "Voir"}</Button>
         </div>
    );
    
};
export default ShowHide
