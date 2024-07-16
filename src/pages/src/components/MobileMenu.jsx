import React from "react";
import arrow from "../assets/arrow.svg";
import closeIcon from "../assets/close.svg";

const MobileMenu = React.forwardRef(({click}, ref) => {
        return (
            <div className="menu white-bg" ref={ref}>
                <div className="flex">
                    <h1 className="fs-600 fw-semi-bold">Timbu</h1>
                    <img className="close" src={closeIcon} alt="close side menu" width="30" height="53" onClick={click}/>
                </div>
                <nav>
                    <ul className="menu-list fs-200 fw-semi-bold">
                        <li className="menu-item flex"><a href="./">Home</a> <img src={arrow} alt="" /></li>
                        <li className="menu-item flex"><a href="#">Products</a> <img src={arrow} alt="" /></li>
                        <li className="menu-item flex"><a href="#">Orders</a> <img src={arrow} alt="" /></li>
                        <li className="menu-item"><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        )
    });

export default MobileMenu;