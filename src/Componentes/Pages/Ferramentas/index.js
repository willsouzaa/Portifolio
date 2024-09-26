import { useState } from "react";
import "./Ferramentas.css";

function Ferramentas () {

    const [state, setState] = useState('example')

    return(
        <div className="container">
        <div className="message">
            <h1>Página em Construção</h1>
            <p>Estamos trabalhando duro para trazer novidades para você. Volte em breve!</p>
            <div className="loader"></div>
        </div>
    </div>
    )
}

export default Ferramentas;