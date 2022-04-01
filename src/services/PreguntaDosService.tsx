const matriz = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function calcularDiagonales() {
    let resultadoDiagonalDeIzquierdaADerecha = 0
    let resultadoDiagonalDeDerechaAIzquierda = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i === j)
                resultadoDiagonalDeIzquierdaADerecha += matriz[j][i]

            if ((i + j) === (matriz.length - 1))
                resultadoDiagonalDeDerechaAIzquierda += matriz[j][i]
        }
    }
    return {
        resultadoDiagonalDeIzquierdaADerecha,
        resultadoDiagonalDeDerechaAIzquierda
    }
}

export function resultado() {
    return calcularDiagonales()
}

export function formatMatriz() {
    //const formatedMatriz = []
    //return matriz.map((data:any, i:number)=> formatedMatriz.push(`${data} `))
    /*for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
           formatedMatriz.push(`${matriz[i][j]} `)
        }
    }*/

    return matriz
}