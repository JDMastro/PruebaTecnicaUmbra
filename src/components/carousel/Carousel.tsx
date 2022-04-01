import React from "react";
import { Carousel } from "react-bootstrap";

interface Iimagen {
    id: number
    url: string
}

interface ICarousel {
    imagenes: Iimagen[],
    ComemntsRequest: any,
    setCommentsData: any,
    setEndPage: any,
    setInitialPage: any
    indexCarousel: number,
    setIndexCarousel :any
}

export default function CarouselUi(props: ICarousel) {

    const { imagenes, ComemntsRequest, setCommentsData, setEndPage, setInitialPage, indexCarousel, setIndexCarousel } = props

    //const [index, setIndex] = React.useState(0);

    const RandomNumber = () => {
        return Math.floor(Math.random() * 30) + 50
    }

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndexCarousel(selectedIndex);
        setCommentsData([])
        let initialNumber = RandomNumber()
        let endNumber = initialNumber + 7
        ComemntsRequest.getAll(initialNumber, endNumber).then((data: any) => setCommentsData(data))
        setInitialPage(initialNumber)
        setEndPage(endNumber)
    };

    return (
        <Carousel
            activeIndex={indexCarousel}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
        >
            {
                imagenes.map((data: any, i: any) =>
                    <Carousel.Item key={i}>

                        <img
                            className="rounded mx-auto d-block img-fluid image-size"
                            src={data.url}
                            alt={`img${data.id}`}
                            style={{ width: '95%', height: '100vh' }}
                        />


                    </Carousel.Item>
                )
            }

        </Carousel>
    )
}