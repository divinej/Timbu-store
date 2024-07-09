import ReactDom from "react-dom";
import bars from "../assets/bars-3.svg";
import MobileMenu from "../components/MobileMenu";
import { useRef } from "react";

const Header2 = ({title}) => {
    const navRef = useRef();

    const showMenu = () => {
        navRef.current.classList.toggle("active");
    }
    return (
        <header className="container flex">
            <div className="logo flex">
                <button className="header-btn" type="submit" onClick={showMenu}><img src={bars} alt="Mobile Menu" /></button>
                <a href="./" className="fs-600 fw-semi-bold">Timbu</a>
            </div>

            <p className="fs-500 fw-bold mg-auto">{title}</p>

            {ReactDom.createPortal(
                <MobileMenu ref={navRef} click={showMenu}/>, 
                document.getElementById('portal-root')
            )}
        </header>
    )
}

export default Header2;