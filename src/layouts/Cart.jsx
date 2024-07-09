import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartItem from "../components/CartItem";
import office2016 from "../assets/office2016-p-image.svg";
import officeSuite from "../assets/office-suite.svg";
import couponIcon from "../assets/ticket.svg";

const Cart = () => {
    return (
        <div className="cart container">
            <h2 className="fs-400 fw-bold cart-summary">Cart Summary</h2>

            <Breadcrumb title="Cart"/>
            <div className="cart-details">
                <div>   
                    <CartItem title="Microsoft Office 2016 Professional Plus" imageUrl={office2016}/>
                    <CartItem title="Office Suite Software" imageUrl={officeSuite}/>
                </div>
                <div className="cart-coupon">
                    <p className="fs-400">Have a coupon?</p>
                    <p className="fs-100 mg-bt-1">Add your code for an instant cart discount</p>

                    <div className="coupon-input fs-200">
                        <img src={couponIcon} alt="" />
                        <input type="text" name="coupon" id="coupon" placeholder="Enter Coupon Code"/>
                        <button className="coupon-btn">Apply</button>
                    </div>

                    <p className="fs-400 fw-bold mg-bt-1">Cart Total</p>

                    <div className="cart-total-price">
                        <div className="flex space-between mg-bt-1">
                            <p className="fs-200">subtotal</p>
                            <p className="fs-400 fw-bold">$598</p>
                        </div>
                        <Link to="/checkout" className="btn checkout-btn fw-bold">Checkout $598</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;