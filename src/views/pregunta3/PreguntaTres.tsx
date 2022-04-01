import React from "react";
import { Modal } from "../../components/modal";
import { Comments } from "./Comments";
import { imageReqest } from "../../services/PreguntaTresService";
import { Carousel } from "../../components/carousel";

import { ComemntsRequest } from "../../services/PreguntaTresService";

export default function PreguntaTres() {
    const [openModal, setOpenModal] = React.useState(false);
    const [imageArray, setImageArray] = React.useState<any>([]);

    const [commentsData, setCommentsData] = React.useState([])
    const [endPage, setEndPage] = React.useState(7);
    const [initialPage, setInitialPage] = React.useState(0);

    const [indexCarousel, setIndexCarousel] = React.useState(0);

    React.useEffect(() => {
        ComemntsRequest.getAll(0, 7).then(data => setCommentsData(data))
    }, [])

    return (
        <div className="container mt-4">
            <section className="">
                <section className="">
                    <div className="row">
                        {
                            imageReqest.getAll().map((data: any, i: any) =>

                                <div key={i} onClick={() => { setImageArray([...imageReqest.orderByImageSelected(data.id)]); setOpenModal(true) }} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    <div
                                        className="bg-image hover-overlay ripple shadow-1-strong rounded container-img"
                                        data-ripple-color="light"
                                    >
                                        <img
                                            src={data.url}
                                            className="w-100 image"
                                            alt={`info${data.id}`}
                                        />
                                        <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                        </a>
                                    </div>
                                    <br />
                                </div>

                            )
                        }
                    </div>
                </section>


                <Modal open={openModal} >
                    <div className=""
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: "center",
                            height: '100vh'
                        }}>
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-12 mt-4 ml-3" >
                                <Carousel indexCarousel={indexCarousel} setIndexCarousel={setIndexCarousel} setInitialPage={setInitialPage} setEndPage={setEndPage} setCommentsData={setCommentsData} ComemntsRequest={ComemntsRequest} imagenes={imageArray} />


                            </div>
                            <div className="col-lg-5 col-md-6 col-12" style={{ backgroundColor: "white" }} >
                                <Comments
                                    onCloseModal={() =>{ setOpenModal(false); setIndexCarousel(0) }}
                                    endPage={endPage}
                                    setEndPage={setEndPage}
                                    setCommentsData={setCommentsData}
                                    commentsData={commentsData}
                                    initialPage={initialPage}
                                />
                            </div>

                        </div>
                    </div>
                </Modal>



            </section>
        </div>
    )
}

/*
 <div onClick={() => setOpenModal(true)} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded container-img"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
                                    className="w-100 image"
                                />
                                <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>
                        </div>

*/