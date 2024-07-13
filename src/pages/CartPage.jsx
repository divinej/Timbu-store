import Cart from "../layouts/Cart";
import Subscribe from "../layouts/Subscribe";
import { Link } from "react-router-dom";
import FeaturedProducts from "../layouts/FeaturedProducts";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
    const {cart} = useOutletContext();
    return (
        <>
        {cart.length < 1 ? <div className="empty-cart"> <p className="fs-400 fw-semi-bold mg-bt-2">Your cart is empty!</p>
                    <p className="mg-bt-1">Browse our categories and discover our best deals!</p>
                    <Link to="/" className="btn fw-bold">Start Shopping</Link>
                    </div> : <Cart />
        }
            <FeaturedProducts ProductTitle="You may also Like"/>
            <FeaturedProducts ProductTitle="Customers who viewed this item also viewed"/>
            <Subscribe />
        </>
    )
}

export default CartPage;