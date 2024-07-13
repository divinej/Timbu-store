import React from "react";
import closeIcon from "../assets/close.svg";
import filledStar from "../assets/filled-star.svg";
import ratingStar from "../assets/star.svg";

const Filter = React.forwardRef(({click}, ref) => {
    return (
        <div className="advance-filter container" ref={ref}>
            <div className="filter-heading flex fs-100 fw-bold">
                <img src={closeIcon} alt="" onClick={click}/>
                <h2 className="fs-200 fw-bold">Advanced Filter</h2>
            </div>
            
            <div className="categories fs-200">
                <fieldset className="filter-border">
                    <legend className="fs-300 fw-bold">All Categories</legend>
                    <div className="filter-control">
                        <input type="radio" id="tool" name="categories"/>
                        <label htmlFor="tool">Productivity Tool (134)</label>
                    </div>
                    <div className="filter-control">
                        <input type="radio" id="creativeD" name="categories" defaultChecked />
                        <label htmlFor="creativeD">Creativity and Design (150)</label>
                    </div>
                    <div className="filter-control">
                        <input type="radio" id="secureP" name="categories"/>
                        <label htmlFor="secureP">Security and Privacy (54)</label>
                    </div>
                    <div className="filter-control">
                        <input type="radio" id="utility" name="categories"/>
                        <label htmlFor="utility">Utilities (47)</label>
                    </div>
                    <div className="filter-control">
                        <input type="radio" id="educat" name="categories"/>
                        <label htmlFor="educat">Education and Learning (43)</label>
                    </div>
                    <div className="filter-control">
                        <input type="radio" id="entertain" name="categories" value="entertainment"/>
                        <label htmlFor="entertain">Entertainment (38)</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="fs-300 fw-bold">Brands</legend>
                    <div className="filter-control">
                        <input type="checkbox" id="bAdobe" name="adobe" value="adobe"/>
                        <label className="input-label" htmlFor="bAdobe">Adobe</label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="bAdobee" name="adobe" />
                        <label className="input-label" htmlFor="bAdobee">Adobe</label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="bMicrosoft" name="microsoft" defaultChecked />
                        <label className="input-label" htmlFor="bMicrosoft">Microsoft</label>
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
                        <input type="checkbox" id="fiveStar" name="fiveStar" value="5"/>
                        <label className="input-label" htmlFor="fiveStar"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17"/> <span className="rating-point"> 5.0</span></label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="fourStar" name="fourStar" value="4" defaultChecked />
                        <label className="input-label" htmlFor="fourStar"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 4.0 & Up</span></label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="threeStar" name="threeStar" value="3"/>
                        <label className="input-label" htmlFor="threeStar"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 3.0 & Up</span></label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="twoStar" name="twoStar" value="2"/>
                        <label className="input-label" htmlFor="twoStar"><img src={filledStar} alt="" width="17"  height="17" /> <img src={filledStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 2.0 & Up</span></label>
                    </div>
                    <div className="filter-control">
                        <input type="checkbox" id="oneStar" name="oneStar" value="1"/>
                        <label className="input-label" htmlFor="oneStar"><img src={filledStar} alt="" width="17"  height="17" /> <img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17" /><img src={ratingStar} alt="" width="17"  height="17"/> <span className="rating-point"> 1.0 & Up</span></label>
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

                <div className="action-btn">
                <button className="btn">Reset</button>
                <button className="btn gray-btn">Apply</button>
                </div>
            </div>
        </div>
    )
}) 

export default Filter;