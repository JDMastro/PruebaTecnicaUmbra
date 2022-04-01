//import React from "react";
import React from "react";
import { Avatar } from "../../components/avatar";
import { ComemntsRequest } from "../../services/PreguntaTresService";


export function PaginationComments({ endPage, setEndPage, setCommentsData, commentsData, initialPage, onCloseModal }: any) {

    const ESC_CODE = 27

    const checkEscwasPressed = (evt: any) => {
        if (evt.keyCode === ESC_CODE) {
            onCloseModal()
        }
    }

    React.useEffect(() => {
        document.addEventListener("keydown", checkEscwasPressed);

        return () => {
            document.removeEventListener("keydown", checkEscwasPressed);
        };
    }, [checkEscwasPressed]);

    const handleScroll = (e: any) => {
        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
            setEndPage(endPage + 7)
            ComemntsRequest.getAll(initialPage, endPage).then(data => setCommentsData(data))
        }
    }




    return (

        <div className="card" style={{
            height: "100vh", overflowY: "auto"
        }} onScroll={handleScroll}>
            {
                commentsData.map((data: any, i: any) =>
                    <div className="card-body" key={i}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <Avatar nombreCompleto={data.name} />
                                <p className="small mb-0 ms-2"><span className="fw-bold">{data.name}</span><br />{data.email}</p>

                            </div>
                        </div>

                        <p>{data.body}</p>
                    </div>
                )
            }

        </div>

    )


}