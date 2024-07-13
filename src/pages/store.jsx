import React from "react";
import Header from "../layouts/Header";
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
            <Header filter={context.filter} cartQuantity={context.cart.length}/>
            <main>
                <Filter />
                <ProductListing currentProduct={currentProduct}/>
                {currentProduct > 0 ? <Pagination totalProducts={context.sortedProduct.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} currrentStorePage={currrentStorePage} />
                 : <div></div>
                }
                <Subscribe />
            </main>
        </>
    )
}

export default Store;