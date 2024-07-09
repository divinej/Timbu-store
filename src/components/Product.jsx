import { Link } from "react-router-dom";
import wishlistIcon from "../assets/wishlist.svg";
import starRating from "../assets/Rating-Group.svg";

const Product = ({title, imageUrl}) => {
    return (
        <div className="product">
            <div className="flex space-between mg-bt-1">
                <button className="btn red-btn">New</button>
                <img src={wishlistIcon} alt="" />
            </div>
            <img className="product-img mg-bt-1" src={imageUrl} alt="" />
            <img className="mg-bt-1" src={starRating} alt="" />
            <p className="mg-bt-1">{title}</p>
            <p className="mg-bt-1"><span className="fw-bold">$299.99</span> <del>400.00</del></p>

            <Link to="/cart" className="btn add-to-cart-btn fw-bold">Add to Cart</Link>
        </div>
    )
}

export default Product;