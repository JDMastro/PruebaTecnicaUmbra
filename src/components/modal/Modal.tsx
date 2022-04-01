//import { Modal } from "react-bootstrap";

interface Imodal {
  open: boolean,
  children?: React.ReactChild[] | any,
 // onClose: (close: boolean) => void
}

export default function ModalUi(props: Imodal) {
  const { open, children, /*onClose*/ } = props
  return (
    <div id="myModal" className="__modal" style={{ display: open ? "block" : "none"}}>
      {
        children
      }
    </div>
  )
}