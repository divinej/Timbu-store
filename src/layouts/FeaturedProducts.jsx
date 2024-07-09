import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import Product from "../components/Product";
import bitdefender from "../assets/bitdefender-p-image.svg";
import office2016 from "../assets/office2016-p-image.svg";
import mcafee from "../assets/mcafee-p-image.svg";
import kasperky from "../assets/kasperky-p-image.svg";

const FeaturedProducts = ({ProductTitle}) => {
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
                <Product title="2024 Anti-Virus Bitdefender Latest Version" imageUrl={bitdefender}/>
                <Product title="Microsoft Office 2016 Professional Plus" imageUrl={office2016}/>
                <Product title="2024 5 Years Mc Afee Anti-Virus Latest Version" imageUrl={mcafee}/>
                <Product title="Kaspersky Standard 1 Device 1 Year 2024" imageUrl={kasperky}/>
            </div>
            
        </section>
    )
}

export default FeaturedProducts;