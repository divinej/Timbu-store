import couponIcon from "../assets/coupon.svg";
import arrowRight from "../assets/arrow-right.svg";
import closeIcon from "../assets/close.svg";

const Banner = () => {
    return (
        <div className="banner yellow-bg fs-100 fw-bold">
            <div className="container flex">
                <div className="banner-content flex">
                    <img className="banner-coupon-img" src={couponIcon} alt="" width="20" height="40" />
                    <p>50% off storewide - Limited time! <a href="#">Shop Now <img src={arrowRight} alt=""/></a></p>
                </div>
                <img className="banner-close-icon" src={closeIcon} alt="" width="12" height="12" />
            </div>
        </div>
    )
}

export default Banner;