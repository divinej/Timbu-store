import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import Product from "../components/Product";
import { useOutletContext } from "react-router-dom";


const FeaturedProducts = ({ProductTitle}) => {
    const {products} = useOutletContext();
  
    return (
        <section className="container featured-products">
            <div className="featured-products-title flex space-between">
                <h2 className="fs-500 fw-bold">{ProductTitle}</h2>
                <div className="product-slider">
                    <button className="slider-prev">
                        <img src={arrowLeft} alt="" />
                    </button>
                    <button className="slider-next">
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
            </div>

            <div className="featured-listing">
                {products.slice(0, 4).map((item) => <Product key={item.unique_id} id={item.id} title={item.name} url={item.photos} price={item?.current_price[0].USD} item={item} slug={item.url_slug}/>)}
            </div>
            
        </section>
    )
}

export default FeaturedProducts;