import star from "../assets/star.svg";
import wishList from "../assets/heart.svg";


const ProductDetail = ({item, addToCart} ) => { 

    return(
        <>
            <div className="container short-description">
                <img className="w-100" src={"https://api.timbu.cloud/images/" + item?.photos[0].url} alt={item.name} />

                <div>
                    <div className="flex gap-1 fs-300">
                    <div className="">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img  src={star} alt="" />
                    </div>
                        <p className="fs-100">0 Reviews</p>
                    </div>
                    <h2 className="fs-500 fw-bold mg-bt-1">{item.name}</h2>
                    <p className="mg-bt-1">{item.description}</p>
                    <p className="mg-bt-1"><span className="yellow-text fs-400">${item.current_price[0]?.USD}</span> <del>${item.current_price[0]?.USD[0] * 1.5}</del></p>

                    {/* <p className="mg-bt-1 border-top-bottom">Brand: <span className="blue-text">Microsoft</span></p> */}

                    <table className="mg-bt-2">
                        <tbody>
                            <tr>
                                <td>SKU</td>
                                <td>{item.available_quantity}</td>
                            </tr>
                            <tr>
                                <td>CATEGORY:</td>
                                <td>{item.categories.map(category => category.name)}</td>
                            </tr>
                            {/* <tr>
                                <td>TAG</td>
                                <td>Microsoft, Office</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className="flex gap-2 w-100 mg-bt-1">
                        <button className="btn wishlist-btn fw-bold"><img src={wishList} alt="" /> Wishlist</button>
                    </div>
                    <button className="btn add-to-cart-btn fw-bold" onClick={() => addToCart(item)} >Add to Cart</button>
                </div>
            </div>
            <div className=" container fs-300 product-details">
                <div className="description">
                    <div className="flex btn-toggle fs-400">
                        <button className="active">Description</button>
                        <button>Additional Information</button>
                        <button>Customer Feedback</button>
                    </div>
                    <h2 className="fs-400 fw-bold mg-bt-1 mobile-content">Decriptions</h2>
                    <p>{item?.description}</p>
                </div>
                <div className="description mobile-content">
                    <h2 className="fs-400 fw-bold mg-bt-1">Additional Information</h2>
                    <p>Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019. Microsoft Office, or more simply Office, is a family of software built by Microsoft.</p>

                    <ul className="ul-description">
                        <li>Fully installed Office applications</li>
                        <li>Access anywhere</li>
                    </ul> 
                </div>
                <div className="description mobile-content">
                    <h2 className="fs-400 fw-bold mg-bt-1">Customer Feedback</h2>
                    <p>Microsoft Office 2019 is the latest version of Microsoft’s</p>

                    <ul className="ul-description">
                        <li>Fully installed Office applications</li>
                        <li>Access anywhere</li>
                    </ul> 
                </div>
            </div>
        </>
    )
}

export default ProductDetail;