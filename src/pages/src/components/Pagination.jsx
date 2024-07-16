import { useState } from "react";

const Pagination = ({totalProducts, productPerPage, setCurrentPage, currrentStorePage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pages.push(i);
    }
   
    return (
        <div className="pagination">
            <button className="btn pagination-btn">Show More</button>

            <div className="pagination-conatiner flex">
                <button className={currrentStorePage > 1 ? 'pagination-circle p-prev' : 'pagination-circle last-page'}  onClick={()=> currrentStorePage > 1 ? setCurrentPage(currrentStorePage - 1) :  setCurrentPage(1)}>{`<`}</button>
                {
                    pages.map((page, index) => <button key={index} className={page === currrentStorePage ? 'active pagination-circle' : 'pagination-circle'} onClick={()=> setCurrentPage(page)}>{page}</button>)
                }
                <button className={currrentStorePage < (Math.ceil(totalProducts / productPerPage)) ? 'pagination-circle p-next' : 'pagination-circle last-page'} onClick={()=> currrentStorePage < totalProducts ? setCurrentPage(currrentStorePage + 1) :  setCurrentPage(Math.ceil(totalProducts / productPerPage))}>{`>`}</button>
            </div>
        </div>
    )
}
export default Pagination;