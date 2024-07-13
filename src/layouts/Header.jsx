import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import bars from "../assets/bars-3.svg";
import search from "../assets/search.svg";
import helpIcon from "../assets/formkit_help.svg";
import userIcon from "../assets/user-circle.svg";
import cartIcon from "../assets/cart-icon.svg"
import MobileMenu from "../components/MobileMenu";
import { useRef, useState } from "react";
import InputElement from "../components/InputElement";

const Header = ({ filter, cartQuantity}) => {
    const [navSearch, setNavSearch] = useState('')

    const handleNavInput = (event) => {
        setNavSearch(event.target.value);
    }


    const navRef = useRef();

    const showMenu = () => {
        navRef.current.classList.toggle("active");
    }
    return (
        <header className="header white-bg">
            <div className="container flex space-between align-center">
                <div className="logo flex">
                    <button className="header-btn" type="submit" onClick={showMenu}><img src={bars} alt="Mobile Menu" /></button>
                    <a href="/" className="fs-600 fw-semi-bold">Timbu</a>
                </div>

                <div className="header-search flex">
                    <div className="search-box">
                        <img src={search} alt="" />
                        <InputElement type="text" name="navSearch" id="navSearch" placeholder="Search" value={navSearch} onChange={handleNavInput} />
                    </div>
                    <button className="btn search-btn" onClick={()=>filter(navSearch)}>Search</button>
                </div>
                

                <ul className="header-menu flex">
                    <li><Link to="/"><img src={helpIcon} alt="" width="24" height="24" /></Link></li>
                    <li><Link href="/"><img src={userIcon} alt="Account" width="24" height="24"/></Link></li>
                    <li className="cart"><Link to="/cart"><img src={cartIcon} alt="Cart" width="24" height="24"/><span className="black-circle fs-100 fw-bold black-bg">{cartQuantity}</span></Link></li>
                </ul>

                {ReactDom.createPortal(
                    <MobileMenu ref={navRef} click={showMenu}/>, 
                    document.getElementById('portal-root')
                )}
            </div>
        </header>
    )
}

export default Header;