import { useOutletContext } from "react-router-dom";
import Checkout from "../layouts/Checkout";
import Footer from "../layouts/Footer";
import Header2 from "../layouts/Header2";
import Subscribe from "../layouts/Subscribe";


const CheckoutPage = () => {
const {cart, totalCart} = useOutletContext();

    return(
        <>
        <Header2 title="Processing Order..."/>
        <main>
            <div className="container">
                <h2 className="fs-400 fw-bold cart-summary mg-bt-2">Cart Checkout</h2>
                <div className="breadcrumb fs-300 mg-bt-2">
                    <p>Timbu {`>`} <span className="yellow-text">Cart</span> {`>`}<span className="yellow-text">Checkout</span></p>
                </div>
            </div>
            <div className="checkout container">
                <Checkout />
                <div className="checkout-summary">
                    <p className="fs-400 fw-bold mg-bt-1">Order History</p>

                    
                    <table className="fs-300">
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((item, index) => 
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item?.current_price}</td>
                            </tr>                 
                            )
                        }
                         <tr>
                            <td>Sub Total</td>
                            <td>${totalCart}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$8.00</td>
                        </tr>
                        </tbody>
                    </table>

                    <button to="/success" form="checkout-form" className="btn checkout-btn fw-bold">Pay by Credit or Debit Card</button>
                </div>
            </div>
            <Subscribe />
        </main>
        <Footer />
        </>
    )
}

export default CheckoutPage;