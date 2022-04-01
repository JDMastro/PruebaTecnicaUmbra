
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

interface Ilits {
    label: string,
    path: string
}

interface Inavbar {
    title: string,
    list: Ilits[],
    children?: React.ReactChild[] | any,
}

export default function NavbarUi(props: Inavbar) {
    const { list, title, children } = props
    return (
        <>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            list.map((data: any, i: any) =>
                                   <li key={i} className="nav-item">
                                    <Link className="nav-link" to={`${data.path}`}>{data.label}</Link>
                                    </li>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        { children }
        </>
    )
}

/*

<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

*/