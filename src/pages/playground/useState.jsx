import { useState } from "react";
import { Link } from "react-router-dom";

function useStateContador(){
    const [contador, setContador] = useState(0);
    function aumentar(){
        setContador(contador+1);
    }

    function disminuir(){
        setContador(contador-1);
    }
    return(
        <div>
            <h2>valor del contador = {contador}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <Link to="/">
            <button>volver al login</button>
            </Link>
        </div>
    );
}

export default useStateContador;