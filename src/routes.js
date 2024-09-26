import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Ferramentas from "./Componentes/Pages/Ferramentas";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<App />} />
                <Route path="/favoritos" element= {<Ferramentas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;