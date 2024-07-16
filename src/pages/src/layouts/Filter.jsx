import { useRef } from "react";
import ReactDom from "react-dom";
import searchIcon from "../assets/search.svg";
import filterIcon from "../assets/filter.svg";
import blackFilterIcon from "../assets/black-filter.svg";
import AdvancedFilter from "../components/AdvancedFilter";
import InputElement from "../components/InputElement";
import Breadcrumb from "../components/Breadcrumb";
import { useOutletContext } from "react-router-dom";

const Filter = () => {

  
    const {sortedProduct, filter} = useOutletContext();


    const filterProduct = (event) => {
        console.log(event.target.value);
    }

    const filterRef = useRef();
    const showFilter = () => {
        filterRef.current.classList.toggle("active");
    }
    
    return (
        <div className="container">
            <Breadcrumb title="Shops"/>
            
            <div className="product-search flex">
                <div className="filter-search-box fs-200">
                    <img src={searchIcon} alt="" />
                    <InputElement type="text" name="search" id="search" placeholder="Search softwares, tools" onChange={() => filter(event.target.value)} />
                    
                </div>
                <button className="filter-btn" onClick={showFilter}><img src={filterIcon} alt="Filter" /></button>

                {ReactDom.createPortal(
                    <AdvancedFilter ref={filterRef} click={showFilter}/>, 
                    document.getElementById('portal-root')
                )}
             </div>
            <div className="fs-200 flex space-between desktop-filter">
                <button className="btn dt-filter-btn">Filter <img src={blackFilterIcon} alt="Filter" /></button>  

                <div className="flex space-between">
                    <div>
                        <label htmlFor="sortBy">Sort by:</label>
                        <select className="product-sort" name="sort" id="sortBy" onChange={filterProduct}>
                            <option value="Newest Arrival" def>Newest Arrival</option>
                            <option value="priceDec">Price: High to Low</option>
                            <option value="priceAsc">Price: Low to High</option>
                        </select>
                    </div>

                    <p className="filter-result"><span className="fw-bold">{sortedProduct.length}</span> Results Found</p>
                </div>
            </div>
        </div>
        
    )
}

export default Filter;