import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import Filter from "../layouts/Filter";
import Footer from '../layouts/Footer';
import ProductListing from "../layouts/ProductListing";
import Pagination from "../components/Pagination";
import Subscribe from "../layouts/Subscribe";

const Store = () => {
    return (
        <>
            <Banner />
            <Header />
            <main>
                <Filter />
                <ProductListing />
                <Pagination />
                <Subscribe />
            </main>
            <Footer />
        </>
    )
}

export default Store;