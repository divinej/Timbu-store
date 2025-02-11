import Header from "../layouts/Header";
import Subscribe from "../layouts/Subscribe";
import ProductDetail from "../layouts/ProductDetail";
import FeaturedProducts from "../layouts/FeaturedProducts";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const {cart, filter, products, handleAddToCart } = useOutletContext();



    const params = useParams();
    const productTitle = params.slug.split('-').join(' ');
    const product = products.filter((item) => item.name.toLowerCase() === productTitle)   

    return(
        <>
            <Header filter={filter} cartQuantity={cart.length}/>
            <main>
                <div className="container mg-bt-1">
                    <div className="breadcrumb fs-300">
                        <p>Timbu {`>`} <span className="yellow-text">Shop</span> {`>`}<span className="yellow-text">Product Details</span></p>
                    </div>
                </div>
                {product.map(item => <ProductDetail key={item.unique_id} item={item} addToCart={handleAddToCart}/>)}
                <FeaturedProducts ProductTitle="You may also like"/>
                <Subscribe />
            </main>
        </>
    )
}

export default ProductDetailPage;