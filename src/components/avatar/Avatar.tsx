interface Iavatar {
    nombreCompleto: string
}

function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;
}

export default function Avatar(props: Iavatar) {
    const { nombreCompleto } = props
    return (
        <div style={{ width: "25px", height: "25px", backgroundColor: randomColor() }} className="rounded-circle text-center">
            <p style={{ color : randomColor() === "#FFFFFF" ? "black" : "white" }}>
                {`${nombreCompleto.split(' ')[0][0]}${nombreCompleto.split(' ')[1][0]}`}
            </p>
        </div>
    )
}