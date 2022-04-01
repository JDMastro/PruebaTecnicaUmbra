import React from "react";
import { PaginationComments } from "./PaginationComments";


export function Comments({ onCloseModal, endPage, setEndPage, setCommentsData, commentsData, initialPage}: any) {

    

    return (
        <>
            <ul className="m-2" style={{
                display: 'flex',
                justifyContent : 'space-between',
                flexWrap : 'wrap',
                alignItems : 'center',
                listStyle : 'none'
            }}>
                <li><span> Comentarios</span></li>
                <li onClick={()=> onCloseModal()} className="btn" ><span aria-hidden="true">&times;</span></li>
            </ul>
            
            <hr />

            <PaginationComments 
               endPage={endPage} 
               setEndPage={setEndPage}
               setCommentsData={setCommentsData}
               commentsData={commentsData}
               initialPage={initialPage}
               onCloseModal={()=> onCloseModal()}
            />



        </>
    )
}