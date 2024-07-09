import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header2 from "../layouts/Header2";
import successIcon from "../assets/success.svg";

const Success = () => {
    return(
        <>
        <Header2 title="Order Received" />
        <main className="container success">
            <p className="fs-500 text-center">Thank You for Your Purchase!! 🌟</p>
            <p className="fs-600 fw-bold text-center">Order Successfully <br/> Placed!</p>
            <img src={successIcon} alt="" width="80" height="80" />

            <div className="order-history">
                <p className="fs-400">Order History</p>
                <table className="fs-300">
                    <tbody>
                        <tr>
                            <td>ORDER NUMBER</td>
                            <td>#0001</td>
                        </tr>
                        <tr>
                            <td>DATE</td>
                            <td>July 7, 2024</td>
                        </tr>
                    </tbody>
                </table>

                <Link to="/" className="btn success-btn fw-bold">Continue Shopping</Link>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Success;