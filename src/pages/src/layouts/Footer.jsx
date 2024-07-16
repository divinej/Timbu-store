import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import visacard from "../assets/visacard.svg";
import americanExpress from "../assets/american-express.svg";
import mastercard from "../assets/mastercard.svg";
import stripe from "../assets/stripe.svg";
import paypal from "../assets/paypal.svg";
import applePay from "../assets/applepay.svg"

const Footer = () => {
    return (
        <footer className="black-bg fs-200 fw-regular">
            <div className="container">
                <div className="footer-links">
                    <div className="footer-content">
                        <p className="fs-500 fw-bold mg-bt-1">Timbu Store</p>
                        <p className="mg-bt-1">Computer Software Store</p>

                        <img className="social-icon" src={instagram} alt="instagram" />
                        <img className="social-icon" src={facebook} alt="facebook" />
                        <img className="social-icon" src={youtube} alt="Youtube" />
                    </div>
                    <div className="footer-content">
                        <p className="fs-300 fw-bold mg-bt-1">Links</p>

                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="/cart">Cart</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <p className="fs-300 fw-bold mg-bt-1">Info</p>

                        <ul>
                            <li><a href="#">Shopping Policy</a></li>
                            <li><a href="#">Returns & Refund</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <p className="fs-300 fw-bold mg-bt-1">Office</p>

                        <p className="mg-bt-1">House 17 room 4,<br/> highlandway,<br /> Lagos, Nigeria</p>
                        <p>234-0001-2222</p>
                    </div>
                </div>

                <div className="copyright-content fs-100">
                    <div className="mg-bt-2">
                        <img className="payment-option" src={visacard} alt="" width="48" height="32" />
                        <img className="payment-option" src={americanExpress} alt="" width="48" height="32" />
                        <img className="payment-option" src={mastercard} alt="" width="48" height="32" />
                        <img className="payment-opti0n" src={visacard} alt="" width="48" height="32" />
                        <img className="payment-option" src={stripe} alt="" width="48" height="32"/>
                        <img className="payment-option" src={paypal} alt="" width="48" height="32" />
                        <img className="payment-option" src={applePay} alt="" width="48" height="32" />
                    </div>
                    <div className="copyright-text">
                        <div className="flex mg-bt-2">
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="">Terms of Use</a></p>
                        </div>
                        <p>Copyright &copy 2024 Timbu. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;