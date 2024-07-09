import ReactDom from "react-dom";
import bars from "../assets/bars-3.svg";
import search from "../assets/search.svg";
import helpIcon from "../assets/formkit_help.svg";
import userIcon from "../assets/user-circle.svg";
import cartIcon from "../assets/cart-icon.svg"
import MobileMenu from "../components/MobileMenu";
import { useRef } from "react";

const Header = () => {
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

            <div className="header-search flex">
                <div className="search-box">
                    <img src={search} alt="" />
                    <input type="text" name="search" id="search" placeholder="Search" />
                </div>
                <button className="btn search-btn">Search</button>
            </div>
            

            <ul className="header-menu flex">
                <li><a href=""><img src={helpIcon} alt="" width="24" height="24" /></a></li>
                <li><a href=""><img src={userIcon} alt="Account" width="24" height="24"/></a></li>
                <li className="cart"><a href="/cart"><img src={cartIcon} alt="Cart" width="24" height="24"/></a><span className="black-circle fs-100 fw-bold black-bg">2</span></li>
            </ul>

            {ReactDom.createPortal(
                <MobileMenu ref={navRef} click={showMenu}/>, 
                document.getElementById('portal-root')
            )}
        </header>
    )
}

export default Header;