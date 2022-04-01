import { resultado, formatMatriz } from "../../services/PreguntaDosService";
export default function PreguntaDos() {
    const { resultadoDiagonalDeIzquierdaADerecha, resultadoDiagonalDeDerechaAIzquierda } = resultado()

    return (
        <>
        {
            formatMatriz().map((data : any, i : any)=> <div key={i}>{`${data} `}<br/></div> )
        }
            {`|
              ${resultadoDiagonalDeDerechaAIzquierda} - 
              ${resultadoDiagonalDeIzquierdaADerecha}| = 
              ${resultadoDiagonalDeDerechaAIzquierda - resultadoDiagonalDeIzquierdaADerecha} `}

        </>
    )
}