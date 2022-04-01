import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

import { PreguntaUno } from "../views/pregunta1";
import { PreguntaDos } from "../views/pregunta2";
import { PreguntaTres } from "../views/pregunta3";

export const Rutas = () => {
    return (
            <Routes>
                <Route path="/" element={<PreguntaUno/>}> </Route>

                <Route path="/dos" element={<PreguntaDos/>}></Route>

                <Route path="/tres" element={<PreguntaTres/>}></Route>

            </Routes>
    )
}