import { Link } from "react-router-dom";
import Checkout from "../layouts/Checkout";
import Footer from "../layouts/Footer";
import Header2 from "../layouts/Header2";
import Subscribe from "../layouts/Subscribe";


const CheckoutPage = () => {
    return(
        <>
        <Header2 title="Processing Order..."/>
        <main>
            <div className="container mg-bt-1">
                <h2 className="fs-400 fw-bold cart-summary">Cart Checkout</h2>
                <div className="breadcrumb fs-300">
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
                            <tr>
                                <td>Microsoft Office 2016 Professional Plus x 1</td>
                                <td>$299.00</td>
                            </tr>
                            <tr>
                                <td>Office Suite Software x 1</td>
                                <td>$299.00</td>
                            </tr>
                            <tr>
                                <td>Sub Total</td>
                                <td>$598.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$8.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="/success" className="checkout-btn fw-bold">Pay by Credit or Debit Card</Link>
                </div>
            </div>
            <Subscribe />
        </main>
        <Footer />
        </>
    )
}

export default CheckoutPage;