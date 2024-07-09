import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Cart from "../layouts/Cart";
import Subscribe from "../layouts/Subscribe";
import FeaturedProducts from "../layouts/FeaturedProducts";

const CartPage = () => {
    return (
        <>
            <Banner />
            <Header />
            <Cart />
            <FeaturedProducts ProductTitle="You may also Like"/>
            <FeaturedProducts ProductTitle="Customers who viewed this item also viewed"/>
            <Subscribe />
            <Footer />
        </>
    )
}

export default CartPage;