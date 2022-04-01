

export function buildEscaleras(numeroescalera: number) {
    const escaleras = []
    var linea = ""
    for (let i = 0; i <= numeroescalera; i++) {
        linea = ""
        for (let j = 0; j <= numeroescalera; j++) {
            if (j > numeroescalera - i)
                linea += "#"
            else
                linea += " "
        }
        escaleras.push(linea)
    }
    return escaleras
}