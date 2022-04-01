import React from "react";
import { TextField } from "../../components/textField";
import { buildEscaleras } from "../../services/PreguntaUnoService";

export default function PreguntaUno() {
    const [numeroescalera, setNumeroescalera] = React.useState(0)

    return (
        <>
        <div className="card m-3" style={{width: "18rem"}}>
            <TextField
                autofocus
                className="mt-1"
                label="Número de escaleras"
                name="numeroescalera"
                onChange={(evt: any) => setNumeroescalera(evt.target.value)}
                type="number"
                value={numeroescalera} />
                
            </div>

            {
                buildEscaleras(numeroescalera).map((data: any, i: number) => <div style={{ backgroundColor: '#D3FFEF' }} key={i}>{data}</div>)
            }
        </>
    )
}