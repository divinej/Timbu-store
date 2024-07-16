import { Link, useOutletContext } from "react-router-dom";
import wishlistIcon from "../assets/wishlist.svg";
import star from "../assets/star.svg";
import useNavigateToTop from "../features/NavigateToTop";


const Product = ({id,title, url, price, item, slug}) => {
    const {handleAddToCart} = useOutletContext();
   
    return (
        <div className="product">
            <Link to={`/product/${slug}`} onClick={useNavigateToTop}>
                <div className="product-box">
                    <div className="flex space-between mg-bt-1">
                        <button className="btn red-btn">New</button>
                        <img src={wishlistIcon} alt="" />
                    </div>
                    <img className="product-img mg-bt-1" src={"https://api.timbu.cloud/images/" + url[0].url} alt="" />
                    <div className="mg-bt-1">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img  src={star} alt="" />
                    </div>
                    <p className="mg-bt-1">{title}</p>
                    <p className="mg-bt-1"><span className="fw-bold">${parseFloat(price).toFixed(2)}</span> <del>400.00</del></p>
                </div>
            </Link>
            <button className="btn add-to-cart-btn fw-bold" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
        </div>
    )
}

export default Product;