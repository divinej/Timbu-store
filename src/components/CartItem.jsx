import deleteIcon from "../assets/delete-icon.svg";

const CartItem = ({title, imageUrl}) => {
    return (
        <div>
            <div className="cart-item">
                <img className="delete-icon" src={deleteIcon} alt="delete" />
                <div className="flex gap-1 ">
                    <img className="cart-item-img" src={imageUrl} alt="" />
                    <div className="increaseQuantity">
                        <div className="fs-100">
                            <p className="mg-bt">{title}</p>
                            <p className="mg-bt green-text">In-stock</p>
                            <p className="mg-bt yellow-text">Pro Version</p>
                        </div>
                        <div className="item-quantity fs-300 flex">
                            <button className="yellow-text">-</button>
                            <p>1</p>
                            <button className="yellow-text">+</button>
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    <p className="fw-bold fs-200">$299.00</p>
                    <p>Discount Applied <span className="cart-discount">-30%</span></p>
                </div>
            </div>
            
            
        </div>
    )
}

export default CartItem;