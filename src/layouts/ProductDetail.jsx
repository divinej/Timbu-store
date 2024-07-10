import { Link } from "react-router-dom";
import office2016 from "../assets/office2016-p-image.svg";
import fourStar from "../assets/four-star.svg";
import wishList from "../assets/heart.svg";

const ProductDetail = () => {
    return(
        <>
            <div className="container short-description">
                <img className="w-100" src={office2016} alt="Microsoft office 2016" />

                <div>
                    <div className="flex gap-1 fs-300">
                        <img src={fourStar} alt="4 star rating" />
                        <p className="fs-100">11 Reviews</p>
                    </div>
                    <h2 className="fs-500 fw-bold mg-bt-1">Microsoft Office 2016 Professional</h2>
                    <p className="mg-bt-1">Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019. Microsoft Office, or more simply Office, is a family of software built by Microsoft.</p>
                    <p className="mg-bt-1"><span className="yellow-text fs-400">$299.00</span> <del>$400.00</del></p>

                    <p className="mg-bt-1 border-top-bottom">Brand: <span className="blue-text">Microsoft</span></p>

                    <table className="mg-bt-2">
                        <tbody>
                            <tr>
                                <td>SKU</td>
                                <td>1117</td>
                            </tr>
                            <tr>
                                <td>CATEGORY:</td>
                                <td>Living Room, Bedroom</td>
                            </tr>
                            <tr>
                                <td>TAG</td>
                                <td>Microsoft, Office</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-2 w-100 mg-bt-1">
                        <div className="item-quantity fs-300 flex">
                            <button className="yellow-text">-</button>
                            <p>1</p>
                            <button className="yellow-text">+</button>
                        </div>
                        <button className="btn wishlist-btn fw-bold"><img src={wishList} alt="" /> Wishlist</button>
                    </div>
                    <Link to="/cart" className="btn add-to-cart-btn">Wishlist</Link>
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
                    <p>Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019. Microsoft Office, or more simply Office, is a family of software built by Microsoft. Office was first unveiled on August 1, 1988 by then-CEO Bill Gates. The first version of Office had Microsoft work tools, Microsoft Excel, Microsoft PowerPoint. Over the years, Office applications have evolved significantly and come with amazing features. Over 2 decades old, Office suite has emerged as an unrivaled tool in the field of office software, document management, spreadsheets, multimedia presentations and more. Now that Microsoft has officially unveiled Windows 11, we are witnessing the introduction and release of Office 2019; A completely new version of the ice that has made a lot of noise with its attractive features.</p>

                    <ul className="ul-description">
                        <li>Fully installed Office applications</li>
                        <li>Access anywhere</li>
                        <li>Always up to date</li>
                        <li>Microsoft Support</li>
                    </ul> 
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