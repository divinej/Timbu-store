import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartItem from "../components/CartItem";
import couponIcon from "../assets/ticket.svg";
import useNavigateToTop from "../features/NavigateToTop";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const {cart, setCart, totalCart, setTotal, getTotalCartPrice} = useOutletContext();

    const handleDecreaseQuantity = (id) => {
        const newState = [...cart];
        if (newState[id].quantity > 1) {
            newState[id].quantity -= 1;
            setCart(newState);
        }
    } 
    const handleIncreaseQuantity = (id) => {
        const newState = [...cart];
        newState[id].quantity += 1;
        setCart(newState);
    }

    const handleRemove = (id) => {
       const newState = [...cart];
       const arr =  newState.filter((item) => item.id !== id);
       setCart(arr);
    }

    return (
        <div className="cart container">
            <h2 className="fs-400 fw-bold cart-summary">Cart Summary</h2>

            <Breadcrumb title="Cart"/>
            <div className="cart-details">
                <div>  
                    {cart.map((item, index) => <CartItem key={item.unique_id} id ={index} item={item} decrease= {handleDecreaseQuantity} increase ={handleIncreaseQuantity} remove={handleRemove} />
                    )
                    }
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
                            <p className="fs-300 fw-bold">subtotal</p>
                            <p className="fs-400 fw-bold">${totalCart}</p>
                        </div>
                        <Link to="/checkout" className="btn checkout-btn fw-bold" onClick={useNavigateToTop}>Checkout ${totalCart}</Link>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export default Cart;