import Product from "../components/Product";
import filledStar from "../assets/filled-star.svg";
import ratingStar from "../assets/star.svg";

const ProductListing = ({currentProduct}) => {
    console.log(currentProduct);
    return (
        <div className="product-listing container">
            <div className="product-filter">
                <div className="categories fs-200">
                    <fieldset className="filter-border">
                        <legend className="fs-300 fw-bold mg-bt-1">All Categories </legend>
                        <div className="filter-control">
                            <input type="radio" id="tools" name="categories"/>
                            <label htmlFor="tools">Productivity Tool (134)</label>
                        </div>
                        <div className="filter-control">
                            <input type="radio" id="design" name="categories" defaultChecked />
                            <label htmlFor="design">Creativity and Design (150)</label>
                        </div>
                        <div className="filter-control">
                            <input type="radio" id="security" name="categories"/>
                            <label htmlFor="security">Security and Privacy (54)</label>
                        </div>
                        <div className="filter-control">
                            <input type="radio" id="utilities" name="categories"/>
                            <label htmlFor="utilities">Utilities (47)</label>
                        </div>
                        <div className="filter-control">
                            <input type="radio" id="education" name="categories"/>
                            <label htmlFor="education">Education and Learning (43)</label>
                        </div>
                        <div className="filter-control">
                            <input type="radio" id="entertainment" name="categories" value="entertainment"/>
                            <label htmlFor="entertainment">Entertainment (38)</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="fs-300 fw-bold">Brands</legend>
                        <div className="filter-control">
                            <input type="checkbox" id="adobe" name="adobe" value="adobe"/>
                            <label className="input-label" htmlFor="adobe">Adobe</label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="adobee" name="adobee" />
                            <label className="input-label" htmlFor="adobee">Adobe</label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="microsoft" name="microsoft" defaultChecked />
                            <label className="input-label" htmlFor="microsoft">Microsoft</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="fs-300 fw-bold">Price</legend>
                        <div className="filter-control range-filter-container">
                            <div className="slider-track"></div>
                            <input className="range-filter" id="filter-price-min" type="range" min="5" max="1500" defaultValue="50"/>
                            <input className="range-filter" id="filter-price-max" type="range" min="5" max="1500" defaultValue="1500"/>
                        </div>
                        <div>
                            <p>Price: <span className="fw-bold">50$</span> - <span className="fw-bold">1500$</span></p>
                        </div>
                    </fieldset>
                    <fieldset className="filter-border fs-200">
                        <legend className="fs-300 fw-bold">Rating</legend>
                        <div className="filter-control">
                            <input type="checkbox" id="5star" name="5star" value="5"/>
                            <label className="input-label" htmlFor="5star"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17"/> <span className="rating-point"> 5.0</span></label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="4star" name="4star" value="4" defaultChecked />
                            <label className="input-label" htmlFor="4star"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 4.0 & Up</span></label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="3star" name="3star" value="3"/>
                            <label className="input-label" htmlFor="3star"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 3.0 & Up</span></label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="2star" name="2star" value="2"/>
                            <label className="input-label" htmlFor="2star"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 2.0 & Up</span></label>
                        </div>
                        <div className="filter-control">
                            <input type="checkbox" id="1star" name="1star" value="1"/>
                            <label className="input-label" htmlFor="1star"><img src={filledStar} alt="" width="17"  height="17" /> <img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 1.0 & Up</span></label>
                        </div>
                        
                    </fieldset>

                    <fieldset className=" fs-200">
                        <legend className="fs-300 fw-bold">Popular Tag</legend>
                        <div className="filter-control btn-container">
                            <button className="btn gray-btn">Adobe</button>
                            <button className="btn">Microsoft</button>
                            <button className="btn gray-btn">Office</button>
                            <button className="btn gray-btn">Bit defender</button>
                            <button className="btn gray-btn">MacSafe</button>
                            <button className="btn gray-btn">Antivirus</button>
                            <button className="btn gray-btn">Vpn</button>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="listing">
                { currentProduct.length > 0 ? currentProduct.map((item) => <Product key={item.unique_id} id={item.id} title={item.name} url={item.photos} price={item?.current_price[0].USD} item={item} slug={item.url_slug}/>) : <div className="empty-cart"><p>Sorry! No Product found</p></div>}
            </div>
        </div>
    )
}

export default ProductListing;