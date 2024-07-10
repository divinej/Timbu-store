import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Subscribe from "../layouts/Subscribe";
import ProductDetail from "../layouts/ProductDetail";
import FeaturedProducts from "../layouts/FeaturedProducts";

const ProductDetailPage = () => {
    return(
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default ProductDetailPage;