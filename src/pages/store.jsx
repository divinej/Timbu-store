import React from "react";
import Filter from "../layouts/Filter";
import ProductListing from "../layouts/ProductListing";
import Pagination from "../components/Pagination";
import Subscribe from "../layouts/Subscribe";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export const AddToCartContext = React.createContext();

const Store = () => {
    const context = useOutletContext();

    //  Pagination
    const [currrentStorePage, setCurrentPage] = useState(1);
    const productPerPage = 6;
    const lastProductIndex = currrentStorePage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage;
     const currentProduct = context.sortedProduct.slice(firstProductIndex, lastProductIndex);
     
    return (
        <>
            <main>
                <Filter />
                <ProductListing currentProduct={currentProduct}/>
                <Pagination totalProducts={context.products.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} currrentStorePage={currrentStorePage} />
                <Subscribe />
            </main>
        </>
    )
}

export default Store;