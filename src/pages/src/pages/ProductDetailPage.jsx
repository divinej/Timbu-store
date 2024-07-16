import Header from "../layouts/Header";
import Subscribe from "../layouts/Subscribe";
import ProductDetail from "../layouts/ProductDetail";
import FeaturedProducts from "../layouts/FeaturedProducts";
import { useOutletContext } from "react-router-dom";

const ProductDetailPage = () => {
    const {cart, filter} = useOutletContext();

    return(
        <>
            <Header filter={filter} cartQuantity={cart.length}/>
            <main>
                <div className="container mg-bt-1">
                    <div className="breadcrumb fs-300">
                        <p>Timbu {`>`} <span className="yellow-text">Shop</span> {`>`}<span className="yellow-text">Product Details</span></p>
                    </div>
                </div>
                <ProductDetail />
                <FeaturedProducts ProductTitle="You may also like"/>
                <Subscribe />
            </main>
        </>
    )
}

export default ProductDetailPage;